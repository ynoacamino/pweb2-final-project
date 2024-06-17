from django.urls import path
from .views import upload_route

urlpatterns = [
  path('upload/', upload_route, name='upload')
]