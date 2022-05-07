from django.db import models
from users.models import User
# Create your models here.




class Post(models.Model):
    text = models.TextField(default="")
    creator = models.ForeignKey(User, related_name='post_creator',on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    liked_by = models.ManyToManyField(User, related_name='liked_by')
    time = models.DateTimeField(auto_now_add=True)
    def like(self, user):
        if user not in self.liked_by.all():
            self.likes +=1
            self.liked_by.add(user)
        else:
            self.likes -= 1
            self.liked_by.remove(user)



class Comment(models.Model):
    creator = models.ForeignKey(User, related_name='comment_creator',on_delete=models.CASCADE)
    post = models.ForeignKey(Post,  related_name='post',on_delete=models.CASCADE)
    #likes = models.IntegerField(default=0)

class Image(models.Model):
    image = models.ImageField(upload_to='post_images', default=None, blank=True, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
