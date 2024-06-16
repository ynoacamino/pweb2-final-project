from django.db import models

# Create your models here.

class Teacher(models.Model):
    teacher_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    email = models.EmailField()

    def _str_(self):
        return self.name
    
class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    email = models.EmailField()
    
    def _str_(self):
        return self.name

class Curso(models.Model):
    curso_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    users = models.ManyToManyField(User, related_name='usuarios')

    def _str_(self):
        return self.name

class Review(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)

    def _str_(self):
        return f'Reseña hecho/a por {self.user.name} hacia el curso {self.curso.name}'
    
class Section(models.Model):
    section_id = models.IntegerField(primary_key=True)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    video_url = models.URLField(max_length=200)

    def _str_(self):
        return self.name
    
class Pdf(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField(max_length=200)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)

    def _str_(self):
        return self.name