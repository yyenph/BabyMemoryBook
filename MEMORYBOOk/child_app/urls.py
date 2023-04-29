from django.urls import path
from . import views

urlpatterns = [
    
    path('',views.child,name='child'),
    path('<str:child_name>/albums/',views.album),
    path('<str:child_name>/albums/add/',views.addAlbum),
    path('<str:child_name>/<str:album_name>/', views.getAlbumContent),
    path('<str:child_name>/<str:album_name>/newentry',views.newEntry),
    path('<str:child_name>/<str:album_name>/entry_title', views.deleteEntry)
   
]