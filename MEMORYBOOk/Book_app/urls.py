
from django.urls import path
from . import views

urlpatterns = [
    
    path('users/',views.users,name='users'),
    # path('', send_the_index),
    # path('index/', views.send_the_index)
    # path('account/', views.account),
    # path('/account/<str:child_name>', views.child_profile),
    # path('/album/<str:album_title>', views.album),
    path('add_child/', views.add_child),
    path('create_album/', views.create_album),
    
]
 