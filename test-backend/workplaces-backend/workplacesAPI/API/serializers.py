from rest_framework import serializers
from locations.models import Location, Schedule


class ScheduleListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Schedule
        fields = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    schedule = ScheduleListSerializer(many=True)

    class Meta:
        model = Location
        fields = ['url', 'id', 'name', 'disp', 'calls',
                  'schedule', 'address', 'site', 'contacts', 'notes']
