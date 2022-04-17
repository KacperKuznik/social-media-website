from pyexpat import model
from django.http import JsonResponse
from django.shortcuts import get_list_or_404, get_object_or_404, render
from urllib3 import HTTPResponse
from .serializers import PostSerializer
from .models import Post
from django.views import generic
from rest_framework import viewsets

# Create your views here.


def get_user_posts(request, uid):
    posts = get_list_or_404(Post, creator=uid)
    serialized_posts = PostSerializer(posts, many=True).data
    return JsonResponse(serialized_posts, safe=False)

def like(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.like(request.user)
    print(post.like(request.user))
    return HTTPResponse(status=200)

# def create_post(request):
