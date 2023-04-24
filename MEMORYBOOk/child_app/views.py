from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from child_app.models import Child, Album
from .utilites import add_child

#serialize objects returned from album into Json to read in front end
from django.forms.models import model_to_dict 
import json
# Create your views here.

# Child related function
@api_view(['GET', 'POST'])
def child(request):
    if request.method=='POST':
        child_list=list(Child.objects.filter(user=request.user).values())
        try:
            add_child(request)
            child_list=list(Child.objects.filter(user=request.user).values())
            return JsonResponse({'child_list':child_list})
        except Exception as e:
            print(e)
            return JsonResponse({'child_list':child_list})
    elif request.method=='GET':
        try:
            child_list=list(Child.objects.filter(user=request.user).values())
            return JsonResponse({'child_list': child_list})
        except Exception as e:
            print(e)
            return JsonResponse({'child_list': []})

# Album related function    
@api_view(['GET'])
def album(request,child_name):
    if request.method=='GET':
        try:
            
            child=Child.objects.get(name=child_name)
            album_list = [model_to_dict(album) for album in child.album.all()]
            print(album_list)
            return JsonResponse({'album_list': album_list})
        except Exception as e:
            print(e)
            return JsonResponse({'album_list': []})
    
@api_view(['POST'])
def addAlbum(request,child_name): #this take from URL
    if request.method=='POST':
        try:
            name=request.data['name']
            print(name,child_name)
            child=Child.objects.get(name=child_name)
            newAlbum=Album.objects.create(
                name=name,
                child=child
            )
            newAlbum.save()
            album_list=[model_to_dict(album) for album in child.album.all()]
            print(album_list)
            return JsonResponse({'album_list': album_list})
        except Exception as e:
            print(e)
            
            return JsonResponse({'album_list': []})
        
#getAlbum Content to display in AlbumContent components
@api_view(['GET'])
def getAlbumContent(request,child_name,album_name):
    if request.method=='GET':
        try:
            
            child=Child.objects.get(name=child_name)
            album=child.album.get(name=album_name)
            album_content=album.albumentries.all()
            print('getAlbumContent in views',album_content)
            return JsonResponse({'album_content': album_content})
        except Exception as e:
            print(e)
            return JsonResponse({'album_content': []})