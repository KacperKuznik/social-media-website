from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('set-csrf/', views.set_csrf_token, name='Set-CSRF'),
    
    
    path('login/', views.login, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('signup/', views.create_user, name='create_user'),
    path('users/<str:username>/', views.get_user, name='get_user'),
    path('messages/<str:receiver>/', views.get_messages, name='get_messages'),
    path('send_message/<str:receiver>/', views.send_message, name='send_messages'),

    path('users/', views.users, name='users'),

    
    path('test-auth/', views.CheckAuth.as_view(), name='Test-Auth'), 

]
