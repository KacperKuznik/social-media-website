from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('set-csrf/', views.set_csrf_token, name='Set-CSRF'),
    
    
    path('login/', views.login, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('signup/', views.create_user, name='create_user'),


    path('users/', views.users, name='users'),
    path('user/<str:username>/', views.get_user, name='get_user'),
    path('test-auth/', views.CheckAuth.as_view(), name='Test-Auth'), 

]