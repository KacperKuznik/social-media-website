
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, get_list_or_404
from django.contrib.auth import authenticate, login as auth_login, logout
from .serializers import *
from .models import *
# Create your views here.


def get_messages(request, room_id):
    
    messages = get_list_or_404(Message, room=room_id)

    for i in range(len(messages)):
        if messages[i].sender != request.user:
            messages[i].seen_by.add(request.user)

    serialized_messages = MessageSerializer(messages, many=True).data

    return JsonResponse(serialized_messages, safe=False)