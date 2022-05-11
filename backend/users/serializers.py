from rest_framework import serializers
from .models import *

class FriendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    friend_requests = FriendRequestSerializer(many=True)

    class Meta:
        model = User
        exclude = ['password']
        extra_fields = ['friend_requests']



class NotificationSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(source='notification_from.avatar')
    username = serializers.CharField(source='notification_from.username')
    class Meta:
        model = Notification
        fields = '__all__'
        extra_fields = ['avatar', 'username']