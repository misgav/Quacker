from django import forms
from .models import Quack

MAX_QUACK_LENGTH = 200

class QuackForm(forms.ModelForm):
    class Meta:
        model = Quack
        fields = ('content',)

    def content_validation(self):
        content = self.cleaned_data["content"]
        if len(content > MAX_QUACK_LENGTH):
            raise forms.ValidationError("This quack is too long.")
        return content
        