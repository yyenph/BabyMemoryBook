from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .utilities import sign_up, log_in,curUser
from django.contrib.auth import authenticate, logout
from .models import User    
from rest_framework.decorators import api_view

# Create your views here.
# def home(request):
#     return()


@api_view(['POST', 'PUT', 'GET'])
def users(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            try:
                # Removes SessionID
                logout(request)
                return JsonResponse({"logout":True})
            except Exception as e:
                print(e)
                return JsonResponse({"logout":False})
        else:
            return sign_up(request.data)

        
    elif request.method == 'PUT':
        return log_in(request)
    
    elif request.method == 'GET':
        return curUser(request)






# 
