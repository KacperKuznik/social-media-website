import json
from random import randint
import time


from .models import Message
from .serializers import MessageSerializer
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.user = self.scope['user']

    def receive(self, text_data):
        message_text = json.loads(text_data)['message']

        #message = Message(
         #   message=message_text, receiver_id=1, sender_id=2)
        #message.save()
        #print(message)

        #self.send((json.dumps({message})))

        # receiver = get_object_or_404(User, username=receiver)
        print(self.user)

        data = {"message": message_text}
        data['receiver'] = 2#receiver.id
        data['sender'] = 1#request.user.id

        serializer = MessageSerializer(data=data)
        if serializer.is_valid():
            message = serializer.data.get('message')
            receiver_id = serializer.data.get('receiver')
            sender_id = serializer.data.get('sender')

            message_obj = Message(
                 message=message, receiver_id=receiver_id, sender_id=sender_id)
            message_obj.save()
            serialized_message = MessageSerializer(message_obj).data
            self.send(json.dumps(serialized_message))


