from django.db import models
from book_app.models import User
# Create your models here.
class Child(models.Model):
    GENDER_OPTIONS =[
        ('G','Girl'),
        ('B','Boy'),
        ('N', 'I prefer not to say')
    ]
    name = models.CharField(max_length = 255, null = False, blank = False, unique = True)
    birthdate=models.DateField(null=False,blank=False)
    gender=models.CharField(max_length=1,choices=GENDER_OPTIONS,null=False,blank=False)
    user=models.ForeignKey(User, on_delete=models.CASCADE, related_name='child')
    profile_photo=models.ImageField(upload_to='child_profiles',null=True,blank=True)

    def __str__(self):
        return f"{self.name}"
    
class Album(models.Model):
    name = models.CharField(max_length = 255, null = False, blank = False, unique = True)
    child=models.ForeignKey(Child, on_delete=models.CASCADE, related_name='album')
    def __str__(self):
        return f"{self.name}"


class Entry(models.Model):
    title = models.CharField(max_length = 255, null = False, blank = False, unique = True)
    date=models.DateField(null=False,blank=False)
    image=models.ImageField(upload_to='album',null=True,blank=True)
    caption = models.CharField(max_length = 255, null = False, blank = False, unique = True)
    album=models.ForeignKey(Album,on_delete=models.CASCADE,related_name='albumentries', null=False,blank=False)
    posted_by=models.ForeignKey(User,on_delete=models.CASCADE,related_name='userentries')
    def __str__(self):
        return f"{self.title}" 