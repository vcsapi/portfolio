from django.contrib import admin
from .models import Portfolio

# Register your models here.

@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'type', 'users')
    list_filter = ('status', 'type')
    search_fields = ('name', 'description', 'tech')
    ordering = ('-id',)
    list_editable = ('status',)
