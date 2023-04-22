from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from child_app.models import Child, Album
from .utilites import add_child
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
       
@api_view(['GET', 'POST'])
def album(request,child_name):
    if request.method=='GET':
        try:
            child=Child.objects.get(name=child_name)
            album_list=list(Album.objects.filter(child=child).values())
            print(album_list)
            return JsonResponse({'album_list': album_list})
        except Exception as e:
            print(e)
            return JsonResponse({'album_list': []})
    elif request.method=='POST':
        try:
            print(request)
            print(request.POST['name'],request.POST['child_name'])
            name=request.POST['name']
            child_name=request.POST['child_name']
            child=Child.objects.get(name=child_name)
            newAlbum=Album.objects.create(
                name=name,
                child=child
            )
            newAlbum.save()
            album_list=list(Album.objects.filter(child=child).values())
            print(album_list)
            return JsonResponse({'Success,newalbum_list': album_list})
        except Exception as e:
            print(e)
            return JsonResponse({'Fail,album_list': []})
        
 
