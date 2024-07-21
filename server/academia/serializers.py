from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('user_id', 'name', 'phone_number', 'email', 'image_url', 'role', 'created_at', 'updated_at', 'password')

class UserSerializerWithOutAuth(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('user_id', 'name', 'email', 'image_url', 'created_at', 'updated_at')


class SectionSerializerWhithOutAuth(serializers.ModelSerializer):
  class Meta:
    model = Section
    fields = ['section_id', 'curso', 'name', 'description']

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = ['comment', 'user', 'curso', 'created_at', 'updated_at']

class ReviewSerializerWithOutAuth(serializers.ModelSerializer):
  user = UserSerializerWithOutAuth()
  class Meta:
    model = Review
    fields = ['comment', 'user', 'curso', 'created_at', 'updated_at']
class CursoSerializer(serializers.ModelSerializer):
  teacher = UserSerializerWithOutAuth()
  sections = SectionSerializerWhithOutAuth(many=True, read_only=True, source='section_set')
  reviews = ReviewSerializerWithOutAuth(many=True, read_only=True, source='review_set')
  class Meta:
    model = Curso
    fields = ['curso_id', 'name', 'description', 'teacher', 'created_at', 'updated_at', 'sections', 'image_url', 'reviews']
class PdfSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pdf
    fields = ['name', 'url', 'section', 'created_at', 'updated_at']
    
class SectionSerializer(serializers.ModelSerializer):
  # curso = CursoSerializer()
  reviews = ReviewSerializer(many=True, read_only=True, source='review_set')
  pdfs = PdfSerializer(many=True, read_only=True, source='pdf_set')
  class Meta:
    model = Section
    fields = ['section_id', 'curso', 'name', 'description', 'video_url', 'created_at', 'updated_at', 'reviews', 'pdfs']
