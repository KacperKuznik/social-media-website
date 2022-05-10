from pyexpat import model
from django.forms import model_to_dict
from django.shortcuts import get_list_or_404, get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from requests import Response
from .serializers import ImageSerializer, PostSerializer
from .models import Post, Image
from django.views import generic
from rest_framework import viewsets
from users.models import User
import json
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


def get_user_posts(request, username):
    user = get_object_or_404(User, username=username)
    posts = user.created_posts.all()
    serializer = PostSerializer(posts, many=True)
    return JsonResponse(serializer.data, safe=False)


def like(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.like(request.user)
    post.save()

    return JsonResponse({"likes": post.likes})


def create_post(request):
    images = request.FILES.getlist('images')
    text = request.POST.get('text')
    post = Post.objects.create(text=text, creator=request.user)
    for image in images:
        ImageSerializer(Image.objects.create(post=post, image=image)).data
    serialized_post = PostSerializer(post).data
    return JsonResponse(serialized_post, safe=False)


def delete_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.delete()
    return HttpResponse(status=204)


def get_home_posts(request):
    posts = []
    for friend in request.user.friends.all():
        posts += friend.created_posts.all()
    serialized_posts = PostSerializer(posts, many=True).data
    return JsonResponse(serialized_posts, safe=False)
