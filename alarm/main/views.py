from django.shortcuts import render
from main.models import Music
from main.forms import MusicForm

def index(request):
    if request.method == 'POST':
        form = MusicForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return render(request, 'main/index.html', {'music': Music.objects.all().last()})
    form = MusicForm()
    return render(request, 'main/index.html', {'music': Music.objects.all().last(), 'form': form})