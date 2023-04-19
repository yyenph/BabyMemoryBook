
from django.contrib import admin
from django.conf import settings  
from django.urls import path,include
from django.conf.urls.static import static
from django.http import HttpResponse

def send_the_index(request):
    # returns the index from React Project
    the_index = open('static/index.html')
    return HttpResponse(the_index)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', send_the_index),
    path('user/', include('book_app.urls'),name='home'),
    
    
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)