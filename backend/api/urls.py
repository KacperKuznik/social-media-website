from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('set-csrf/', views.set_csrf_token, name='Set-CSRF'),
    path('test-auth/', views.CheckAuth.as_view(), name='Test-Auth'),

]
