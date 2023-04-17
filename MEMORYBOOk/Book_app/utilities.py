from .models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json
from django.shortcuts import redirect

# Function for user signup/log in
def sign_up(data):
    email=data['email']
    name=data['name']
    password=data['password']
    try:
        new_user=User.objects.create_user(username=email,name=name,email=email,password=password)
        new_user.save()
        return JsonResponse({'success':True})
    except Exception as e:
        print(e)
        return JsonResponse({'success':False})

def log_in(request):
    username=request.data['email']
    password=request.data['password']
    user=authenticate(request,username=username,password=password)
    
    if user is not None:
        try:
            login(request._request,user)
            return JsonResponse({'Login':True})
     # change to redirect('/account/') later
        except Exception as e:
            print ('error',e)
            return JsonResponse({'Login':False})
    return JsonResponse({'Login':False})

# for creating new child and album




def add_entry(request):
    return()