from .models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json
from django.shortcuts import redirect

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

def log_in(data):
    username=data['email']
    password=data['password']
    user=authenticate(username=data['email'],password=data['password'])
    if user is not None:
        try:
            login(username,password)
            return JsonResponse({'Login':True})
     # change to redirect('/account/') later
        except Exception as e:
            print (e)
            return JsonResponse({'Login':False})
    return JsonResponse({'Login':False})

def log_out():
    return()