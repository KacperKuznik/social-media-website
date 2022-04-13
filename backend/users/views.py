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
            email = data.get('email')
            
            User.objects.create_user(
                username=username, password=password, email=email)
            user = authenticate(username=username, password=password)
            login(request, user)
            serialized_user = UserSerializer(user).data
            return JsonResponse(serialized_user, status=201)
    return JsonResponse({"message": "Incorrect data"}, status=400)

def users(request):
    response = list(User.objects.values())
    return JsonResponse(response, safe=False)


def get_user(request, username):
    obj = get_object_or_404(User, username=username)

    serialized_user = UserSerializer(obj).data
    return JsonResponse(serialized_user, safe=False)






