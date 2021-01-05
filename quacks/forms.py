from django import forms
from .models import Quack
from django.conf import settings

MAX_QUACK_LENGTH = settings.MAX_QUACK_LENGTH

class QuackForm(forms.ModelForm):
    class Meta:
        model = Quack
        fields = ('content',)

    def content_validation(self):
        content = self.cleaned_data["content"]
        if len(content) > MAX_QUACK_LENGTH:
            raise forms.ValidationError("This quack is too long.")
        return content
        