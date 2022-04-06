import json
from random import randint
import time


from .models import Message
from .serializers import MessageSerializer
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def receive(self, text_data):
        message_text = json.loads(text_data)['message']

        #message = Message(
         #   message=message_text, receiver_id=1, sender_id=2)
        #message.save()
        #print(message)

        #self.send((json.dumps({message})))

        # receiver = get_object_or_404(User, username=receiver)

        data = {"message": message_text}
        data['receiver'] = 2#receiver.id
        data['sender'] = 1#request.user.id

        serializer = MessageSerializer(data=data)
        if serializer.is_valid():
            print(serializer)
            message = serializer.data.get('message')
            receiver_id = serializer.data.get('receiver')
            sender_id = serializer.data.get('sender')

            #messagea = Message(
            #     message=message, receiver_id=receiver_id, sender_id=sender_id)
            #messagea.save()
            #serialized_messages = MessageSerializer(messagea).data
            self.send(json.dumps({'message': "siema", 'id': 1, 'sender': 1, 'receiver': 2 }))


