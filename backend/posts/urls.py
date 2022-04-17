from django.urls import path

from .views import *

app_name = 'posts'
urlpatterns = [
    path('<int:uid>/', get_user_posts, name='get_user_posts'),
]
