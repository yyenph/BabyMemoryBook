from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    email = models.EmailField(blank = False, null = False, unique = True)
    name = models.CharField(max_length = 255, null = False, blank = False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return f"{self.name} | {self.email} | {self.id}"
    

    
# class Album(models.Model):
#     name = models.CharField(max_length = 255, null = False, blank = False, unique = True)
#     child=models.ForeignKey(Child, on_delete=models.CASCADE, related_name='album')
#     def __str__(self):
#         return f"{self.name}"


# class Entry(models.Model):
#     title = models.CharField(max_length = 255, null = False, blank = False, unique = True)
#     date=models.DateField(null=False,blank=False)
#     image=models.ImageField(upload_to='child_profiles') #check this later to change folder name, should be child_profile/<something>
#     caption = models.CharField(max_length = 255, null = False, blank = False, unique = True)
#     posted_by=models.ForeignKey(User,on_delete=models.CASCADE)
#     def __str__(self):
#         return f"{self.title}"
