from rest_framework import serializers
from .models import *

class TeacherSerializer(serializers.ModelSerializer):
  class Meta:
    model = Teacher
    fields = ['id', 'name', 'phone_number', 'email']

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'name', 'phone_number', 'email']

class CursoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Curso
    fields = ['id', 'name', 'description', 'image_url', 'teacher', 'users']

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = ['id', 'comment', 'user', 'curso']

class SectionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Section
    fields = ['id', 'curso', 'name', 'description', 'video_url']

class PdfSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pdf
    fields = ['id', 'name', 'url', 'section']
