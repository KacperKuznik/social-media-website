from django.shortcuts import render

from .forms import SignupForm

from .models import User
import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, get_list_or_404
from django.views import generic
from django.contrib.auth import authenticate, login, logout
from .models import User
from .models import User
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
# Create your views here.


def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if username and password:
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                serialized_user = UserSerializer(user).data
                return JsonResponse(serialized_user, status=200, safe=False)
            return JsonResponse({"message": "Wrong username or password"}, status=401)
    return JsonResponse({"message": "Incorrect data"}, status=400)


def logout_view(request):
    logout(request)
    return HttpResponse(status=204)


def signup_view(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        form = SignupForm(data=data)
        if form.is_valid():

            username = data.get('username')
            password = data.get('password')
            first_name = data.get('first_name')
            last_name = data.get('first_name')
            email = data.get('email')

            User.objects.create_user(
                username=username, password=password, first_name=first_name, last_name=last_name, email=email)
            user = authenticate(username=username, password=password)
            login(request, user)
            serialized_user = UserSerializer(user).data
            return JsonResponse(serialized_user, status=201)
    return JsonResponse({"message": "Incorrect data"}, status=400)


def get_users(request):
    response = list(User.objects.values())
    return JsonResponse(response, safe=False)


def get_user(request, username):
    obj = get_object_or_404(User, username=username)
    serialized_user = UserSerializer(obj).data
    return JsonResponse(serialized_user, safe=False)


def get_user_by_id(request, id):
    obj = get_object_or_404(User, id=id)
    serialized_user = UserSerializer(obj).data
    return JsonResponse(serialized_user, safe=False)


def change_avatar(request):
    avatar = request.FILES['avatar']
    request.user.avatar = avatar
    request.user.save()
    serialized_user = UserSerializer(request.user).data
    return JsonResponse(serialized_user, status=201)


def change_background(request):
    background = request.FILES['background']
    request.user.background = background
    request.user.save()
    serialized_user = UserSerializer(request.user).data
    return JsonResponse(serialized_user, status=201)


def request_friend(request, username):
    print(username)
    friend = get_object_or_404(User, username=username)
    request.user.toggle_friend_request(friend)
    return HttpResponse(status=200)


def accept_friend(request, username):
    friend = get_object_or_404(User, username=username)
    request.user.accept_friend_request(friend)
    return HttpResponse(status=200)


def remove_friend(request, username):
    friend = get_object_or_404(User, username=username)
    request.user.remove_friend(friend)
    return HttpResponse(status=200)


def get_notifications(request):
    serialized_notifications = NotificationSerializer(
        request.user.notifications.all(), many=True).data
    return JsonResponse(serialized_notifications, safe=False, status=200)


def seen_notification(request, id):
    notification = get_object_or_404(Notification, pk=id)
    notification.seen = True
    notification.save()
    return HttpResponse(status=200)
