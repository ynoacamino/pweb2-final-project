from rest_framework import viewsets, permissions
from .models import User
from .serializers import UserSerializer

class UserViewSets(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [permissions.AllowAny]