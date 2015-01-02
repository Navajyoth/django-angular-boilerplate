import json
from django.contrib.auth import logout, authenticate, login
#from django.http.response import JSONResponse
from rest_framework import views, status, permissions
from rest_framework.response import Response
from .serializers import UserSerializer


class LoginView(views.APIView):

    def post(self, request):
        data = request.POST
        email = data.get('email', None)
        password = data.get('password', None)
        user = authenticate(email=email, password=password)
        
        if user is not None:
            login(request, user)
            slz = UserSerializer(user)
            return Response(slz.data)
        else:
            return Response({
                'message': 'Invalid email or password'
            }, status.HTTP_401_UNAUTHORIZED)


class LogoutView(views.APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):
        logout(request)
        return Response({}, status.HTTP_204_NO_CONTENT)

