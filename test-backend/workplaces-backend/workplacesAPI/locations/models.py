from django.db import models

# model for location

class Location(models.Model):
    name = models.CharField(max_length=80)
    disp = models.BooleanField(null=True)
    calls = models.BooleanField(null=True)
    schedule = models.JSONField(default={})
    address = models.CharField(max_length=100)
    site = models.CharField(max_length=65)
    contacts = models.PositiveBigIntegerField()
    notes = models.JSONField(default=[])


class Schedule(models.Model):
    mon = models.JSONField(default='list')
    tue = models.JSONField(default='list')
    wed = models.JSONField(default='list')
    thu = models.JSONField(default='list')
    fri = models.JSONField(default='list')
    sat = models.JSONField(default='list')
    sun = models.JSONField(default='list')
