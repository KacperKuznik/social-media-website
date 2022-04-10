import json
from asgiref.sync import async_to_sync
from .models import Message
from .serializers import MessageSerializer
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        
        self.user = self.scope['user']
        self.room_id = self.scope['url_route']['kwargs']['room_id']
        async_to_sync(self.channel_layer.group_add)("chat", self.channel_name)
        self.accept()
        

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)("chat", self.channel_name)

    def receive(self, text_data):

        message_text = json.loads(text_data)['message']

        print(self.user)
        data = {"message": message_text}
        data['room'] = self.room_id
        data['sender'] = 1#request.user.id
        print(data)
        serializer = MessageSerializer(data=data)
        if serializer.is_valid():
            message = serializer.data.get('message')
            room_id = serializer.data.get('room')
            sender_id = serializer.data.get('sender')

            message_obj = Message(
                 message=message, room_id=room_id, sender_id=sender_id)
            message_obj.save()
            serialized_message = MessageSerializer(message_obj).data
            async_to_sync(self.channel_layer.group_send)(
                "chat",
                {
                    "type": "chat.message",
                    "data": json.dumps(serialized_message),
                },
            )
            
    def chat_message(self, event):
        self.send(text_data=event["data"])