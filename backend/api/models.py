from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, UserManager



# Create your models here.


class User(AbstractUser):
    #username = models.CharField(max_length=150, unique=True)
    #email = models.EmailField(Required=True)
    avatar = models.ImageField(upload_to='avatars', null=True, blank=True)
    #USERNAME_FIELD = 'username'
    #objects = UserManager()



#class Message(models.Model):
#    message = models.CharField(max_length=250)
#    sender = models.CharField(max_length=150)
#    receiver = models.ForeignKey("app.Model", verbose_name=_("receiver"), on_delete=models.CASCADE)
#    seen = models.BooleanField(default=False)
#    time = models.TimeField(auto_now_add=True)