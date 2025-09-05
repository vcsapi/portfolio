from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import Portfolio

# Create your views here.

class PortfolioViewSet(ModelViewSet):
    """
    A ViewSet for managing Portfolio entries.
    """
    queryset = Portfolio.objects.all()
    serializer_class = ModelBSerializer

# Keep the original function-based views for backward compatibility if needed
@api_view(['GET', 'POST'])
def students_list(request):
    if request.method == 'GET':
        data = Portfolio.objects.all()
        serializer = ModelBSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        print('post')
        serializer = ModelBSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def students_detail(request, pk):
    try:
        student = Portfolio.objects.get(pk=pk)
    except Portfolio.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = ModelBSerializer(student, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
