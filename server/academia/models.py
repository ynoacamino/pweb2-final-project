from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  user_id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255)
  phone_number = models.CharField(max_length=255)
  email = models.EmailField(unique=True)
  image_url = models.URLField(max_length=200)

  role = models.CharField(max_length=255, default='user')

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  groups = None
  user_permissions = None
  #username = models.CharField(max_length=255, unique=True)
  username = None
  
  
  def __str__(self):
    return self.name

class Curso(models.Model):
  curso_id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255)
  description = models.TextField()
  teacher = models.ForeignKey(User, on_delete=models.CASCADE)
  users = models.ManyToManyField(User, related_name='usuarios', blank=True)
  image_url = models.URLField(max_length=200)

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name

class Review(models.Model):
  comment = models.TextField()
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  curso = models.ForeignKey(Curso, on_delete=models.CASCADE)

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return f'Reseña hecho/a por {self.user.name} hacia el curso {self.curso.name}'
    
class Section(models.Model):
  section_id = models.AutoField(primary_key=True)
  curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
  name = models.CharField(max_length=255)
  description = models.TextField()
  video_url = models.URLField(max_length=200)

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
    
class Pdf(models.Model):
  name = models.CharField(max_length=255)
  url = models.URLField(max_length=200)
  section = models.ForeignKey(Section, on_delete=models.CASCADE)

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name