
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home),
    # path('account/', views.account),
    # path('/account/<str:child_name>', views.child_profile),
    # path('/album/<str:album_title>', views.album),
    
]
