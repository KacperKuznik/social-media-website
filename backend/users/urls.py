from django.urls import path

from .views import *

app_name = 'users'
urlpatterns = [

    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('signup/', signup_view, name='signup'),
    path('friends/request/<str:username>/', request_friend, name='request_friend'),
    path('friends/accept/<str:username>/', accept_friend, name='accept_friend'),
    path('friends/remove/<str:username>/', remove_friend, name='remove_friend'),
    path('change_avatar/', change_avatar, name='change_avatar'),
    path('change_background/', change_background, name='change_background'),
    path('get_users/', get_users, name='get_users'),
    path('id/<int:id>/', get_user_by_id, name='get_user_by_id'),
    path('<str:username>/', get_user, name='get_user'),

]
