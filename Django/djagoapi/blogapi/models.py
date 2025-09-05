from django.db import models

class Blog(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    tags = models.CharField(max_length=256)
    published = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name