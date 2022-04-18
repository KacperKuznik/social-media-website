from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars', default='avatars/default.jpg')
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
            FriendRequest.objects.create(request_from=self, request_to=user)
    
    def remove_friend(self, user):
        self.friends.remove(user)

class FriendRequest(models.Model):
    request_from = models.ForeignKey(User, related_name='request_from', on_delete=models.CASCADE)
    request_to = models.ForeignKey(User, related_name='request_to', on_delete=models.CASCADE)