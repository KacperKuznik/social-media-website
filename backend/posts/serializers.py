from rest_framework import serializers
from .models import *



class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image']



class PostSerializer(serializers.ModelSerializer):
    image_set = ImageSerializer(many=True)

    class Meta:
        model = Post
        fields = ['id', 'text', 'likes', 'time', 'creator', 'image_set']
    