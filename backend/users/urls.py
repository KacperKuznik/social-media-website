from django.urls import path

from .views import *

app_name = 'users'
urlpatterns = [

    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('signup/', signup_view, name='signup'),
    # path('users/<str:username>/', views.get_user, name='get_user'),
    # path('upload/', views.upload, name='upload'),
    # path('users/', views.users, name='users'),

]
