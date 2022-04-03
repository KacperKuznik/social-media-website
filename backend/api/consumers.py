import json
from random import randint
import time
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def receive(self, text_data):
        message = json.loads(text_data)['message']
        print(message)
        self.send((json.dumps({"message": message})))