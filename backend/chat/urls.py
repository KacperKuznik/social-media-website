from django.urls import path

from .views import *

app_name = 'chat'
urlpatterns = [
    path('messages/<int:room_id>/', get_messages, name='get_messages'),
    path('rooms/', get_rooms, name='get_rooms'),
    path('create-room/', create_room, name='create_room'),
]
