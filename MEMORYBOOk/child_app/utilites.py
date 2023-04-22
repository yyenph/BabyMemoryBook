from django.http import JsonResponse, HttpResponse
from book_app.models import User
from .models import Child


def add_child(request):
    # if request.method=='POST':
        print(request.POST)
        name=request.POST['name']
        birthdate=request.POST['birthdate']
        gender=request.POST['gender']
        profile_photo = request.FILES.get('profile_photo', None)
        username=request.POST['username']
        user=User.objects.get(name=username)
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


          
