from rest_framework import viewsets
from .models import EnergyData
from .serializers import EnergyDataSerializer

class EnergyDataViews(viewsets.ModelViewSet):
    queryset = EnergyData.objects.all()
    serializer_class = EnergyDataSerializer
