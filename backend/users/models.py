from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars', default='avatars/default.jpg')
    background = models.ImageField(upload_to='backgrounds', default='backgrounds/default.jpg')
    friends = models.ManyToManyField('self')

    def accept_friend_request(self, user):
        friend_request = FriendRequest.objects.filter(request_to=self, request_from=user) 
        if friend_request.exists():
            self.friends.add(user)
            friend_request.delete()
            return True
        return False

    def toggle_friend_request(self,user):
        #delete if exists else create
        if FriendRequest.objects.filter(request_from=user, request_to=self).exists():
            return False
        friend_request = FriendRequest.objects.filter(request_from=self, request_to=user)
        if friend_request.exists():
            friend_request[0].delete()
        else:
            friend_request = FriendRequest.objects.create(request_from=self, request_to=user)
            Notification.objects.create(notification_to=user, notificaiton_from=self, friend_request=friend_request, message=f"{self.username} wants to be your friend")
    
    def remove_friend(self, user):
        self.friends.remove(user)

class FriendRequest(models.Model):
    request_from = models.ForeignKey(User, related_name='request_from', on_delete=models.CASCADE)
    request_to = models.ForeignKey(User, related_name='request_to', on_delete=models.CASCADE)


class Notification(models.Model):
    notification_to = models.ForeignKey(User, related_name='notifications' ,on_delete=models.CASCADE)
    notificaiton_from = models.ForeignKey(User, related_name='created_notifications', on_delete=models.CASCADE, null=True, blank=True)
    friend_request = models.ForeignKey(FriendRequest, on_delete=models.CASCADE, null=True, blank=True)
    seen = models.BooleanField(default=False)
    message = models.TextField(max_length=60)