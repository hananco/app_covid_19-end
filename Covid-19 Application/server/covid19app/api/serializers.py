from rest_framework import serializers
from base.models import CitizensInfo

class CitizenSerializer(serializers.ModelSerializer):
    class Meta:
        model = CitizensInfo
        fields = '__all__'