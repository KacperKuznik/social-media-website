from datetime import datetime
from email import message
from genericpath import exists
import json
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


def users(request):
    response = list(User.objects.values())
    return JsonResponse(response, safe=False)


def get_user(request, username):
    obj = get_object_or_404(User, username=username)

    serialized_user = UserSerializer(obj).data
    return JsonResponse(serialized_user, safe=False)


def create_user(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = CreateUserSerializer(data=data)
        if serializer.is_valid():

            username = serializer.data.get('username')
            password = serializer.data.get('password')
            email = serializer.data.get('email')

            User.objects.create_user(
                username=username, password=password, email=email)
            print('user saved')
            user = authenticate(username=username, password=password)
            auth_login(request, user)
            serialized_user = UserSerializer(user).data
            return JsonResponse(serialized_user, status=201)

    return HttpResponse(status=400)


def login(request):

    if request.method == 'POST':
        data = json.loads(request.body)

        username = data.get('username')
        password = data.get('password')
        if username and password:
            print(request.user)
            user = authenticate(username=username, password=password)
            if user is not None:
                print('auth')
                auth_login(request, user)

                serialized_user = UserSerializer(user).data
                return JsonResponse(serialized_user, status=200, safe=False)
            else:
                print('not auth')
                return JsonResponse({"message": "Wrong username or password"}, status=401)
    return JsonResponse({"message": "Incorrect data"}, status=400)


def logout_view(request):

    logout(request)
    return HttpResponse(status=204)


def get_messages(request, receiver):
    receiver = get_object_or_404(User, username=receiver)
    messages = get_list_or_404(Message, Q(
        sender=receiver, receiver=request.user) | Q(sender=request.user, receiver=receiver))
    messages.sort(key=lambda message: message.time)
    serialized_messages = MessageSerializer(messages, many=True).data

    return JsonResponse(serialized_messages, safe=False)


def send_message(request, receiver):
    receiver = get_object_or_404(User, username=receiver)

    data = json.loads(request.body)
    data['receiver'] = receiver.id
    data['sender'] = request.user.id

    serializer = MessageSerializer(data=data)
    if serializer.is_valid():
        message = serializer.data.get('message')
        receiver_id = serializer.data.get('receiver')
        sender_id = serializer.data.get('sender')

        Message.objects.create(
            message=message, receiver_id=receiver_id, sender_id=sender_id)
        return HttpResponse(status=201)
    return HttpResponse(status=400)


def upload(request):
    print(request.body)
    return HttpResponse()
