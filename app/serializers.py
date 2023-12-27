from rest_framework import serializers
from .models import EnergyData


class EnergyDataSerializer(serializers.ModelSerializer):
    # end_year = serializers.DateTimeField(format='%Y-%m-%dT%H:%M',required=False,allow_null=True)
    # start_year = serializers.DateTimeField(format='%Y-%m-%dT%H:%M',required=False,allow_null=True)
    added = serializers.DateTimeField(format='%Y-%m-%dT%H:%M')
    published = serializers.DateTimeField(format='%Y-%m-%dT%H:%M')

    class Meta:
        model = EnergyData
        fields = "__all__"
        extra_kwargs = {
            # 'end_year': {'required': False},
            # 'start_year': {'required': False},
            'added': {'required': False},
            'published': {'required': False},
        }
