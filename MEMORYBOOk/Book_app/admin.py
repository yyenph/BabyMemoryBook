from django.contrib import admin
from .models import User,Child
# Register your models here.
admin.site.register([User,Child])