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

@api_view(['GET'])
def initDB(request):
  # pdfLink : https://res.cloudinary.com/dazt6g3o1/image/upload/v1721516914/usd2icanip7mfqidjacb.pdf
  # imageURL: https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}

  # crea 4 profesores, 5 alumnos, 3 cursos, 2 secciones, 3pdfs, 3 reviews

  User.objects.create(
    email="juan@gmail.com",
    name="Juan Peres Lopez",
    phone_number="123456789",
    image_url="https://api.dicebear.com/7.x/pixel-art/svg?seed=juan",
    role="teacher",
  ).save()
  User.objects.create(
    email="maria@gmail.com",
    name="Maria Rodriguez",
    phone_number="12326789",
    image_url="https://api.dicebear.com/7.x/pixel-art/svg?seed=maria",
    role="teacher",
  ).save()
  User.objects.create(
    email="pedro@gmail.com",
    name="Pedro Rodriguez",
    phone_number="12dw6789",
    image_url="https://api.dicebear.com/7.x/pixel-art/svg?seed=pedro",
    role="teacher",
  ).save()

#cursos de programacion
  Curso.objects.create(
    name="Curso de Python",
    description="Aprende Python desde cero",
    teacher=User.objects.get(email="pedro@gmail.com"),
    image_url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721517399/cgrht6i631kc1jxu6der.jpg",
  ).save()
  Curso.objects.create(
    name="Curso de Django",
    description="Aprende Django desde cero",
    teacher=User.objects.get(email="maria@gmail.com"),
    image_url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721517430/u3ryrekn1f9ke8khd2gx.jpg",
  ).save()
  Curso.objects.create(
    name="Curso de Java",
    description="Aprende Java desde cero",
    teacher=User.objects.get(email="juan@gmail.com"),
    image_url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721517466/abxotzvzaacwkqocnd0d.gif",
  ).save()

  #secciones de programacion
  Section.objects.create(
    curso=Curso.objects.get(name="Curso de Python"),
    name="Introduccion",
    description="Introduccion a Python",
    video_url="https://res.cloudinary.com/dazt6g3o1/video/upload/v1721517558/ctzo4esvf5l0y2apkth2.mp4",
  ).save()
  Section.objects.create(
    curso=Curso.objects.get(name="Curso de Python"),
    name="Variables",
    description="Variables en Python",
    video_url="https://res.cloudinary.com/dazt6g3o1/video/upload/v1721517558/ctzo4esvf5l0y2apkth2.mp4",
  ).save()
  Section.objects.create(
    curso=Curso.objects.get(name="Curso de Python"),
    name="Condicionales",
    description="Condicionales en Python",
    video_url="https://res.cloudinary.com/dazt6g3o1/video/upload/v1721517558/ctzo4esvf5l0y2apkth2.mp4",
  ).save()
  Section.objects.create(
    curso=Curso.objects.get(name="Curso de Django"),
    name="Introduccion",
    description="Introduccion a Django",
    video_url="https://res.cloudinary.com/dazt6g3o1/video/upload/v1721517558/ctzo4esvf5l0y2apkth2.mp4",
  ).save()
  Section.objects.create(
    curso=Curso.objects.get(name="Curso de Django"),
    name="Variables",
    description="Variables en Django",
    video_url="https://res.cloudinary.com/dazt6g3o1/video/upload/v1721517558/ctzo4esvf5l0y2apkth2.mp4",
  ).save()
  Section.objects.create(
    curso=Curso.objects.get(name="Curso de Django"),
    name="Condicionales",
    description="Condicionales en Django",
    video_url="https://res.cloudinary.com/dazt6g3o1/video/upload/v1721517558/ctzo4esvf5l0y2apkth2.mp4",
  ).save()
  Section.objects.create(
    curso=Curso.objects.get(name="Curso de Java"),
    name="Introduccion",
    description="Introduccion a Java",
    video_url="https://res.cloudinary.com/dazt6g3o1/video/upload/v1721517558/ctzo4esvf5l0y2apkth2.mp4",
  ).save()

  Pdf.objects.create(
    name="Variables en Python",
    url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721516914/usd2icanip7mfqidjacb.pdf",
    section=Section.objects.get(pk=1),
  ).save()

  Pdf.objects.create(
    name="Variables en Django",
    url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721516914/usd2icanip7mfqidjacb.pdf",
    section=Section.objects.get(pk=1),
  ).save()

  Pdf.objects.create(
    name="Variables en Java",
    url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721516914/usd2icanip7mfqidjacb.pdf",
    section=Section.objects.get(pk=1),
  ).save()

  Pdf.objects.create(
    name="Variables en Python",
    url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721516914/usd2icanip7mfqidjacb.pdf",
    section=Section.objects.get(pk=2),
  ).save()

  Pdf.objects.create(
    name="Variables en Django",
    url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721516914/usd2icanip7mfqidjacb.pdf",
    section=Section.objects.get(pk=2),
  ).save()

  Pdf.objects.create(
    name="Variables en Java",
    url="https://res.cloudinary.com/dazt6g3o1/image/upload/v1721516914/usd2icanip7mfqidjacb.pdf",
    section=Section.objects.get(pk=2),
  ).save()

  return Response("initDB", status=200)
    

#ruta protegida
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def getUser(request):
  # crea una ruta que atraves de un token obtenga el usuario
  user = get_object_or_404(User, email=request.user.email)

  return Response(UserSerializer(user).data, status=200)

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

@api_view(['POST'])
def registerTeacher(request):
  serializer = UserSerializer(data=request.data)

  if not serializer.is_valid():
    return Response(serializer.errors, status=400)
  
  user = User.objects.create(
    email=serializer.validated_data['email'],
    name=serializer.validated_data['name'],
    phone_number=serializer.validated_data['phone_number'],
    image_url=serializer.validated_data['image_url']
    role="teacher"
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
