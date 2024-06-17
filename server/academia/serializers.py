from rest_framework import serializers
from .models import *

class TeacherSerializer(serializers.ModelSerializer):
  class Meta:
    model = Teacher
    fields = ['teacher_id', 'name', 'phone_number', 'email']

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['user_id', 'name', 'phone_number', 'email']

class CursoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Curso
    fields = ['curso_id', 'name', 'description', 'teacher', 'users']

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = ['comment', 'user', 'curso']

class SectionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Section
    fields = ['section_id', 'curso', 'name', 'description', 'video_url']

class PdfSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pdf
    fields = ['name', 'url', 'section']