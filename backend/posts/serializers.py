from rest_framework import serializers
from .models import *
from users.serializers import UserSerializer 



class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image']

class CommentSerializer(serializers.ModelSerializer):
    creator = UserSerializer()
    class Meta:
        model = Comment
        fields = "__all__"

class PostSerializer(serializers.ModelSerializer):
    image_set = ImageSerializer(many=True)
    comment_set = CommentSerializer(many=True)
    creator = UserSerializer()
    class Meta:
        model = Post
        fields = ['id', 'text', 'likes', 'liked_by', 'time', 'creator', 'image_set', 'comment_set']
    