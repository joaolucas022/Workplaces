# Generated by Django 3.2.5 on 2021-07-22 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0002_auto_20210722_2321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='address',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='site',
            field=models.CharField(blank=True, max_length=65, null=True),
        ),
    ]