from rest_framework import serializers
from .models import Portfolio

class ModelBSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = '__all__'
