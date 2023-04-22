from django.urls import path
from . import views

urlpatterns = [
    
    path('',views.child,name='child'),
    path('<str:child_name>/albums/',views.album)
   
]