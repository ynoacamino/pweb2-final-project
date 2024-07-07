from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [permissions.AllowAny]

class TeacherViewSet(viewsets.ModelViewSet):
  queryset = Teacher.objects.all()
  serializer_class = TeacherSerializer
  permission_classes = [permissions.AllowAny]

class CursoViewSet(viewsets.ModelViewSet):
  queryset = Curso.objects.all()
  serializer_class = CursoSerializer
  permission_classes = [permissions.AllowAny]

class ReviewViewSet(viewsets.ModelViewSet):
  queryset = Review.objects.all()
  authentication_classes = [permissions.IsAuthenticated]
  serializer_class = ReviewSerializer

class SectionViewSet(viewsets.ModelViewSet):
  queryset = Section.objects.all()
  serializer_class = SectionSerializer
  permission_classes = [permissions.AllowAny]

class PdfViewSet(viewsets.ModelViewSet):
  queryset = Pdf.objects.all()
  serializer_class = PdfSerializer
  permission_classes = [permissions.AllowAny]
