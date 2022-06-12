from django.forms import ModelForm
from .models import User

class SignupForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email']