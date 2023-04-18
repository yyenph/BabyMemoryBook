from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

from .utilities import sign_up, log_in,curUser
from django.contrib.auth import authenticate, logout
from .models import Child, Album    
from rest_framework.decorators import api_view

# Create your views here.
# def home(request):
#     return()


@api_view(['POST','PUT','GET'])
def users(request):
    if request.method=='POST':
        if request.user.is_authenticated:
            try:
                logout(request)
                return JsonResponse({'Logout':True})
            except Exception as e:
                print(e)
                return JsonResponse({'Logout':False})
        else:
            return sign_up(request.data)

    elif request.method=='PUT':
        print(request)
        return log_in(request)
    elif request.method=='GET':
        print(request)
        return curUser(request)
    


# Child related function
def add_child(request):
    if request.method=='POST':
        print(request.POST)
        name=request.POST['name']
        birthdate=request.POST['birthdate']
        gender=request.POST['gender']
        profile_photo = request.FILES.get('profile_photo', None)
        user=request.user
        try: 
            new_child=Child.objects.create(
                name=name,
                birthdate=birthdate,
                gender=gender,
                user=user,
                profile_photo=profile_photo
            )
            new_child.save()
            return JsonResponse({'Added child':True})
        except Exception as e:
            print(e)
            return JsonResponse({'Added child':False})
    return JsonResponse({'Added child':False})

#Album related


def create_album(request):
    if request.method =='POST':
        print(request.POST)
        print(request.POST['name'])
        print('request sent')
        name=request.POST['name']
        child_name=request.POST['child_name']
        child=Child.objects.get(name=child_name, user=request.user)
        try: 
            new_album=Album.objects.create(
                name=name,
                child=child
            )
            new_album.save()
            return JsonResponse({'Album created': True})
        except Exception as e:
            print(e)
            return JsonResponse({'Album created': False})
    return JsonResponse({'Album created': False})
    
    
def account(request):
    return ()

def child_profile_by_name(request,child_name):
    return()

def album(request,album_title):
    return ()
    
def search(request):
    return()


# def send_the_index(request):
#     # returns the index from React Project
#     the_index = open('../static/index.html')
#     return HttpResponse(the_index)
