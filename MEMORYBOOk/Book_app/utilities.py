from .models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json
from django.shortcuts import redirect
from django.contrib import messages


def sign_up(data):
    email = data['email']
    password = data['password']
    name = data['name']
    super_user = False
    staff = False
    if 'super' in data:
        super_user = data['super']
    if 'staff' in data:
        staff = data['staff']
    try:
        # creates new user
        new_user = User.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        JsonResponse({"success":True})
        return redirect('/')
    except Exception as e:
        print(e)
        JsonResponse({"success": False})
        return redirect('/')
    
def log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email , password = password)
    if user is not None and user.is_active:
        try:
            # Creates SessionID
            login(request._request, user)
            return JsonResponse({'email': user.email, 'name':user.name, 'id': user.id})
        except Exception as e:
            print(e)
            return JsonResponse({'Login':False})
    return JsonResponse({'Login':False})

#get current user and send to backend,can use to get related fields later(like child)
def curUser(request):
    if request.user.is_authenticated:
        #                    format       query                     options
        user_info = serialize("json",  [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})


