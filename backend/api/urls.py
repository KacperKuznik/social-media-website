from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('set-csrf/', views.set_csrf_token, name='Set-CSRF'),


    path('messages/<int:room_id>/', views.get_messages, name='get_messages'),



    

    path('test-auth/', views.CheckAuth.as_view(), name='Test-Auth'),

]
