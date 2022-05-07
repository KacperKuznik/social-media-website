from pyexpat import model
from django.forms import model_to_dict
from django.shortcuts import get_list_or_404, get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from .serializers import ImageSerializer, PostSerializer
from .models import Post, Image
from django.views import generic
from rest_framework import viewsets
from users.models import User
import json

# Create your views here.


def get_user_posts(request, username):
    user = get_object_or_404(User, username=username)
    posts = Post.objects.filter(creator=user)
    data = []
    for post in posts:
        serialized_post = PostSerializer(post).data
        images = post.image_set.all()
        post_images = {"images": []}
        for image in images:
            serialized_image = ImageSerializer(image).data
            post_images['images'].append(serialized_image['image']) 
        serialized_post.update(post_images)
        data.append(serialized_post)
    return JsonResponse(data, safe=False)


def like(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.like(request.user)
    post.save()

    return JsonResponse({"likes": post.likes})


def create_post(request):
    images = request.FILES.getlist('images')
    text = request.POST.get('text')
    post = Post.objects.create(text=text, creator=request.user)
    print(post)
    post_images = {"images": []}
    for image in images:
        serialized_image = ImageSerializer(Image.objects.create(post=post, image=image)).data
        post_images['images'].append(serialized_image['image'])        
    serialized_post = PostSerializer(post).data
    serialized_post.update(post_images)
    return JsonResponse(serialized_post, safe=False)


def delete_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.delete()
    return HttpResponse(status=204)


def get_home_posts(request):
    posts = []
    for friend in request.user.friends.all():
        posts += Post.objects.filter(creator=friend)
    serialized_posts = PostSerializer(posts, many=True).data
    return JsonResponse(serialized_posts, safe=False)
