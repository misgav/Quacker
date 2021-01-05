from django.conf import settings
from .models import Quack
from rest_framework import serializers

MAX_QUACK_LENGTH = settings.MAX_QUACK_LENGTH

class QuackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quack
        fields = ['content']
    
    def validate_content(self,value):
        if len(value) > MAX_QUACK_LENGTH:
            raise serializers.ValidationError("This quack is to long")
        return value


    
