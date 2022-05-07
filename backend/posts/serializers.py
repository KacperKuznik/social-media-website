from rest_framework import serializers
from .models import *



class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image']
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)

class PostSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'text', 'likes', 'time', 'creator', 'liked_by', 'images']
