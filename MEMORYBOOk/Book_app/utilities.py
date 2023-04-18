from .models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json
from django.shortcuts import redirect
from django.contrib import messages

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
    email=request.data['email']
    password=request.data['password']
    user=authenticate(username=email,password=password)
    print(email,password)
    print('Received email:', email)
    print('Received password:', password)
    if user is not None:
        try:
            login(request._request,user)
            return JsonResponse({'email': user.email, 'name':user.name})
            # return redirect('/')
        except Exception as e:
            print ('error',e)
            messages.success(request,"Sign in unsuccesfully, please try again")
            return JsonResponse({'login':False})
            # return redirect('signin')
    return messages.success(request,"Sign in unsuccesfully, please try again")


def curUser(request):
    if request.user.is_authenticated:
        print(request.user)
        return (request.user)