from django.db import models

class Portfolio(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    tech = models.CharField(max_length=256)
    users = models.CharField(max_length=8)
    status = models.CharField(max_length=128)
    repos = models.URLField(max_length=512)
    type = models.CharField(max_length=128)

    def __str__(self):
        return self.name