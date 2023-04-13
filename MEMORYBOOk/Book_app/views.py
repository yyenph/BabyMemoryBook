from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
# from .utilities import sign_up, log_in
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['POST'])
def home(request):
    if request.method=='POST':
        return sign_up(request.data)
    if request.method=='POST':
        return log_in(request.data)
    