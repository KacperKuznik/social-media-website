from datetime import datetime
from email import message
from genericpath import exists
import json
from re import L
from cv2 import log
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, get_list_or_404
from django.views import generic
from django.core import serializers
from django.contrib.auth import authenticate, login as auth_login, logout
from .models import User
from .serializers import *
from .models import *
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from django.middleware.csrf import get_token
from rest_framework.decorators import api_view
from django.db.models import Q

# Create your views here.


@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})


class CheckAuth(APIView):
    authentication_classes = [SessionAuthentication]

    def get(self, request):
        return Response({'detail': 'You\'re Authenticated'})



def get_messages(request, room_id):
    
    messages = get_list_or_404(Message, room=room_id)

    for i in range(len(messages)):
        if messages[i].sender != request.user:
            messages[i].seen_by.add(request.user)

    serialized_messages = MessageSerializer(messages, many=True).data

    return JsonResponse(serialized_messages, safe=False)



def upload(request):
    avatar = request.FILES['avatar']
    request.user.avatar = avatar
    request.user.save()
    serialized_user = UserSerializer(request.user).data
    return JsonResponse(serialized_user, status=201)
