from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Curso)
admin.site.register(Review)
admin.site.register(Section)
admin.site.register(Pdf)

