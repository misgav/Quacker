from django.db import models

# Create your models here.
class Quack(models.Model):
    # id = models.AutoField(primary_key=True)
    content = models.TextField(blank=True, null=True)
    likes = models.IntegerField(default=0)
    image = models.FileField(upload_to='./images/', blank=True, null=True)