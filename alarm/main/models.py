from django.db import models

class Music(models.Model):
    file = models.FileField(upload_to='music/')