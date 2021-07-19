from rest_framework import serializers
from location.models import Location


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name', 'disp', 'calls', 'address', 'site', 'contacts']
