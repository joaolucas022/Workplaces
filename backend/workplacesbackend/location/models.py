from django.db import models

# model for location

class Location(models.Model):
    name = models.CharField(max_length=80)
    disp = models.BooleanField(null=True)
    calls = models.BooleanField(null=True)
    schedule = models.JSONField(null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    site = models.CharField(max_length=65, null=True, blank=True)
    contacts = models.PositiveBigIntegerField(null=True, blank=True)
    notes = models.JSONField(null=True, blank=True)
