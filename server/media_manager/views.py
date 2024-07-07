from django.http import HttpResponse

from dotenv import load_dotenv
load_dotenv()

import cloudinary
import cloudinary.uploader

import json
config = cloudinary.config(secure=True)

def upload_route(request):
  if request.method == 'POST':
    file = request.FILES['file']
    return uploadFile(file)
  
  return HttpResponse("Only post method allowed")

def uploadFile(file):
  upload_data = cloudinary.uploader.upload(file, resource_type = "auto")
  return HttpResponse(json.dumps(upload_data))
  