from django.urls import path
from .consumers import ChatConsumer

ws_urlpatterns = [
    path('chat/<str:receiver>/', ChatConsumer.as_asgi())
]
