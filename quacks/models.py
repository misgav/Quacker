from django.db import models
from django.conf import settings 

User = settings.AUTH_USER_MODEL

# Create your models here.
class Quack(models.Model):
    # id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(blank=True, null=True)
    likes = models.ManyToManyField(User, related_name='quack_user', blank=True)
    image = models.FileField(upload_to='./images/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def getData(self):
        return ({"id": self.id,"content": self.content,"likes": self.likes})