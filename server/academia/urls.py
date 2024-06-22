from rest_framework import routers
from .views import *

router = routers.DefaultRouter()

router.register('api/user', UserViewSet, 'user')
router.register('api/teacher', TeacherViewSet, 'teacher')
router.register('api/curso', CursoViewSet, 'curso')
router.register('api/review', ReviewViewSet, 'review')
router.register('api/section', SectionViewSet, 'section')
router.register('api/pdf', PdfViewSet, 'pdf')


urlpatterns = router.urls