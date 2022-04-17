from django.test import TestCase
from django.urls import reverse
from .models import Post
from .views import *
import json
from .serializers import *
from users.models import User
# Create your tests here.
def create_test_user(username='username'):
    return User.objects.create(username=username, password='password', email='email')

def create_test_post(user):
    return Post.objects.create(creator=user)

class PostModelTest(TestCase):

    def test_like_and_unlike(self):
        user = create_test_user()
        post = create_test_post(user)
        self.assertIs(user in post.liked_by.all(), False)

        prev_likes = post.likes
        post.like(user)
        current_likes = post.likes
        self.assertIs(prev_likes+1, current_likes)
        self.assertIs(user in post.liked_by.all(), True)

        prev_likes = current_likes
        post.like(user)
        current_likes = post.likes
        self.assertIs(prev_likes-1, current_likes)
        self.assertIs(user in post.liked_by.all(), False)
 

class GetUserPostsViewsTests(TestCase):
    def test_non_existing_user(self):
        response = self.client.get(reverse('posts:get_user_posts', args=['username']))
        self.assertEqual(response.status_code, 404)

    def test_no_posts(self):
        user = create_test_user()
        response = self.client.get(reverse('posts:get_user_posts', args=[user.username]))
        self.assertEqual(response.status_code, 404)

    def test_one_post(self):
        user = create_test_user()
        post = create_test_post(user)
        serialized_post = PostSerializer(post).data
        response = self.client.get(reverse('posts:get_user_posts', args=[user.username]))
        self.assertJSONEqual(str(response.content, encoding='utf8'), [serialized_post])
    
    def test_many_posts(self):
        user = create_test_user()
        post = create_test_post(user)
        serialized_post = PostSerializer(post).data
        post2 = create_test_post(user)
        serialized_post2 = PostSerializer(post2).data
        response = self.client.get(reverse('posts:get_user_posts', args=[user.username]))
        self.assertJSONEqual(str(response.content, encoding='utf8'), [serialized_post, serialized_post2])

