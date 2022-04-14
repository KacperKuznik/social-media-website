from django.urls import path

from .views import *

app_name = 'chat'
urlpatterns = [
    path('messages/<int:room_id>/', get_messages, name='get_messages'),
]
