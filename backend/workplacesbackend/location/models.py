from django.db import models

# model for location

class Location(models.Model):
    name = models.CharField(max_length=80)
    disp = models.BooleanField(null=True)
    calls = models.BooleanField(null=True)
    address = models.CharField(max_length=100)
    site = models.CharField(max_length=65)
    contacts = models.PositiveBigIntegerField()
