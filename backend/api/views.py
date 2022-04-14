from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from django.middleware.csrf import get_token

# Create your views here.


@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})


class CheckAuth(APIView):
    authentication_classes = [SessionAuthentication]
    def get(self, request):
        return Response({'detail': 'You\'re Authenticated'})







