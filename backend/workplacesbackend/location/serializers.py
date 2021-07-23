from rest_framework import serializers
from .models import Location


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Location
        fields = ['url', 'id', 'name', 'disp', 'calls', 'address', 'site', 'contacts', 'schedule', 'notes']
