from email.policy import default
from pyexpat import model
from pyexpat.errors import messages
from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, UserManager

# Create your models here.


class User(AbstractUser):
    #username = models.CharField(max_length=150, unique=True)
    #email = models.EmailField(Required=True)
    avatar = models.ImageField(upload_to='avatars', default='avatars/default.jpg')
    friends = models.ManyToManyField('self')
    #USERNAME_FIELD = 'username'
    #objects = UserManager()


class Room(models.Model):
    users = models.ManyToManyField(User)
    

class Message(models.Model):
    message = models.CharField(max_length=250)
    sender = models.ForeignKey(User, related_name='sender',on_delete=models.CASCADE )
    room = models.ForeignKey(Room, related_name='room',on_delete=models.CASCADE)
    #seen = models.BooleanField(default=False)
    seen_by = models.ManyToManyField(User)
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.message
