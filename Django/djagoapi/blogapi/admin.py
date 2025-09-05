from django.contrib import admin
from .models import Blog

# Register your models here.

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('name', 'published', 'tags')
    list_filter = ('published', 'tags')
    search_fields = ('name', 'description', 'tags')
    ordering = ('-published',)
    date_hierarchy = 'published'
