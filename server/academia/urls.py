from rest_framework import routers
from django.urls import path, include
from .views import *

router = routers.DefaultRouter()

router.register(r'user', UserViewSet, 'user')
router.register(r'curso', CursoViewSet, 'curso')
router.register(r'review', ReviewViewSet, 'review')
router.register(r'section', SectionViewSet, 'section')
router.register(r'pdf', PdfViewSet, 'pdf')

urlpatterns = [
  path('', include(router.urls)),
  path('login/', login),
  path('register/', register),
  path('getUser/', getUser),
  path('initDB/', initDB),
]