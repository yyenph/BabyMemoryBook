from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from book_app.models import User
from .utilites import add_child
# Create your views here.

# Child related function
def child(request):
    if request.method=='POST':
        add_child(request)

