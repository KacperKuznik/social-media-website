from django.db import models

from users.models import User
# Create your models here.



class Room(models.Model):
    users = models.ManyToManyField(User)
    name = models.CharField(max_length=25, default="")
    

class Message(models.Model):
    message = models.CharField(max_length=250)
    sender = models.ForeignKey(User, related_name='sender',on_delete=models.CASCADE )
    room = models.ForeignKey(Room, related_name='room',on_delete=models.CASCADE)
    seen_by = models.ManyToManyField(User, blank=True)
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.message
