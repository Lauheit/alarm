from django import forms
from main.models import Music

class MusicForm(forms.ModelForm):
    class Meta:
        model = Music
        fields = ('file',)
