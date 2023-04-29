from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from child_app.models import Child, Album,Entry,User
from .utilites import add_child
from rest_framework import serializers

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
            print('child',child_list)
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
        
#serializer for Entry model, image field got error using model_to_dict with exclude, need to use this method instead
class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'title', 'date', 'caption','image']

#getAlbum Content to display in AlbumContent components
@api_view(['GET'])
def getAlbumContent(request,child_name,album_name):
    if request.method=='GET':
        try:
            child=Child.objects.get(name=child_name)
            album=child.album.get(name=album_name)
            entries=album.albumentries.all()
            serialized_entry=EntrySerializer(entries,many=True)
            print('getAlbumContent in views',serialized_entry.data)
            return JsonResponse({'serialized_entry':serialized_entry.data})

        except Exception as e:
            print(e)
            return JsonResponse({'serialized_entry': []})

        

@api_view(['POST'])
#dont need to use child_name but need to pass and parameter since its included in the url
def newEntry(request,child_name,album_name): 
    if request.method=='POST':
        try:
            print(request.POST)
            print('request received for newEntry',request.POST['title'])
            title=request.POST['title']
            date=request.POST['date']
            image = request.FILES.get('image', None)
            caption=request.POST['caption']
            #get album,user object first
            album_name=request.POST['album_name']
            album=Album.objects.get(name=album_name)
            user=request.POST['username']
            posted_by=User.objects.get(name=user)
#create and save newentry
            newEntry=Entry.objects.create(
                title=title,
                date=date,
                image=image,
                caption=caption,
                album=album,
                posted_by=posted_by
            )
            newEntry.save()
#retrieve the list of all entries after creating
            entries_list=[model_to_dict(entry) for entry in album.albumentries.all()]
            print(entries_list)
            return JsonResponse({'entries_list': entries_list})
        except Exception as e:
            print(e)
#double-check if it return correctly when its fail to create new entry but the list already have existing entry
            return JsonResponse({'album_list': []})
    
@api_view(['DELETE'])
#dont need to use child_name,album_name but need to pass as parameter since its included in the url
def deleteEntry(request,child_name,album_name,entry_title):
    if request.method=='DELETE':
        try: 
            entry=Entry.objects.get(title=entry_title)
            entry.delete()
            entries_list=[model_to_dict(entry) for entry in album.albumentries.all()]
            print(entries_list)
            return JsonResponse({'entries_list': entries_list})
        except Exception as e:
            print(e)
            entries_list=[model_to_dict(entry) for entry in album.albumentries.all()]
            print(entries_list)
            return JsonResponse({'entries_list': entries_list})
            