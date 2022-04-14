from django.urls import path

from .views import *

app_name = 'users'
urlpatterns = [

    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('signup/', signup_view, name='signup'),
    # path('users/<str:username>/', views.get_user, name='get_user'),
    path('change_avatar/', change_avatar, name='change_avatar'),
    path('get_users/', get_users, name='get_users'),

]
