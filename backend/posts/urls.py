from django.urls import path

from .views import *

app_name = 'posts'
urlpatterns = [
    path('create/', create_post, name='create_post'),
    path('like/<int:post_id>/', like, name='like'),
    path('delete/<int:post_id>/', delete_post, name='delete_post'),
    path('<str:username>/', get_user_posts, name='get_user_posts'),

]
