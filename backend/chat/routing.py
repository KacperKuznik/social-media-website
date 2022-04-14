from django.urls import path
from .consumers import ChatConsumer

ws_urlpatterns = [
    path('chat/<int:room_id>/', ChatConsumer.as_asgi())
]
