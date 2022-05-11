from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars', default='avatars/default.jpg')
    background = models.ImageField(upload_to='backgrounds', default='backgrounds/default.jpg')
    friends = models.ManyToManyField('self')

    def accept_friend_request(self, user):
        friend_request = user.friend_requests.filter(request_to=self) 
        if friend_request.exists():
            self.friends.add(user)
            friend_request.delete()
            return True
        return False

    def toggle_friend_request(self,user):
        #delete if exists else create
        if user.friend_requests.filter(request_to=self).exists():
            return False
        friend_request = user.request_to.filter(request_from=self)
        if friend_request.exists():
            friend_request[0].delete()
        else:
            friend_request = FriendRequest.objects.create(request_from=self, request_to=user)
            Notification.objects.create(notification_to=user, notification_from=self, friend_request=friend_request, message=f"{self.username} wants to be your friend")
    
    def remove_friend(self, user):
        self.friends.remove(user)

class FriendRequest(models.Model):
    request_from = models.ForeignKey(User, related_name='friend_requests', on_delete=models.CASCADE)
    request_to = models.ForeignKey(User, related_name='request_to', on_delete=models.CASCADE)


class Notification(models.Model):
    notification_to = models.ForeignKey(User, related_name='notifications' ,on_delete=models.CASCADE)
    notification_from = models.ForeignKey(User, related_name='created_notifications', on_delete=models.CASCADE, null=True, blank=True)
    friend_request = models.ForeignKey(FriendRequest, on_delete=models.CASCADE, null=True, blank=True)
    seen = models.BooleanField(default=False)
    message = models.TextField(max_length=60)