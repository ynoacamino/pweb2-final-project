from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User as UserAuth

#ruta protegida
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def protected(request):

  return Response({'message': 'Ruta protegida'}, status=200)

@api_view(['POST'])
def login(request):
  user = get_object_or_404(User, email=request.data['email'])
  userAuth = get_object_or_404(UserAuth, email=request.data['email'])

  if not user.check_password(request.data['password']):
    return Response({'error': 'Credenciales inválidas'}, status=400)

  token = Token.objects.get(user=userAuth)

  return Response({'token': token.key, 'user': UserSerializer(user).data})

@api_view(['POST'])
def register(request):
  serializer = UserSerializer(data=request.data)

  if not serializer.is_valid():
    return Response(serializer.errors, status=400)
  
  user = User.objects.create(
    email=serializer.validated_data['email'],
    name=serializer.validated_data['name'],
    phone_number=serializer.validated_data['phone_number'],
    image_url=serializer.validated_data['image_url']
  )

  user.set_password(serializer.validated_data['password'])
  user.save()

  userToken = UserAuth.objects.create(email=serializer.validated_data['email'], username=serializer.validated_data['email'])
  userToken.save()

  token = Token.objects.create(user=userToken)

  return Response({'token': token.key, 'user': UserSerializer(user).data}, status=status.HTTP_201_CREATED)

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

class CursoViewSet(viewsets.ModelViewSet):
  queryset = Curso.objects.all()
  serializer_class = CursoSerializer
  authentication_classes = [TokenAuthentication]

  def get_permissions(self):
    if self.action in ['create', 'update', 'partial_update', 'destroy']:
      self.permission_classes = [IsAuthenticated]
    else:
      self.permission_classes = [permissions.AllowAny]
    return super().get_permissions()

class ReviewViewSet(viewsets.ModelViewSet):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer

  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

class SectionViewSet(viewsets.ModelViewSet):
  queryset = Section.objects.all()
  serializer_class = SectionSerializer
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

class PdfViewSet(viewsets.ModelViewSet):
  queryset = Pdf.objects.all()
  serializer_class = PdfSerializer
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]