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
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
def log_in(request):
    email = request.data['email']
    password = request.data['password']
    print(email, password)
    user = authenticate(username = email , password = password)
    if user is not None and user.is_active:
        try:
            # Creates SessionID
            login(request._request, user)
            return JsonResponse({'email': user.email, 'name':user.name})
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    return JsonResponse({'login':False})

def curUser(request):
    if request.user.is_authenticated:
        #                    format       query                     options
        user_info = serialize("json",  [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})


# Function for user signup/log in
# def sign_up(data):
#     email=data['email']
#     name=data['name']
#     password=data['password']
#     try:
#         new_user=User.objects.create_user(username=email,name=name,email=email,password=password)
#         new_user.save()
#         return JsonResponse({'success':True})
#     except Exception as e:
#         print(e)
#         return JsonResponse({'success':False})

# def log_in(request):
#     email=request.data['email']
#     password=request.data['password']
#     user=authenticate(username=email,password=password)
#     print(email,password)
#     print('Received email:', email)
#     print('Received password:', password)
#     if user is not None:
#         try:
#             login(request._request,user)
#             return JsonResponse({'email': user.email, 'name':user.name})
#             # return redirect('/')
#         except Exception as e:
#             print ('error',e)
#             messages.success(request,"Sign in unsuccesfully, please try again")
#             return JsonResponse({'login':False})
#             # return redirect('signin')
#     return messages.success(request,"Sign in unsuccesfully, please try again")


# def curUser(request):
#     if request.user.is_authenticated:
#         print(request.user)
#         return (request.user)