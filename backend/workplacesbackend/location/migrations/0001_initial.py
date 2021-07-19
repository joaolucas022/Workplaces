# Generated by Django 3.2.5 on 2021-07-19 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
                ('disp', models.BooleanField(null=True)),
                ('calls', models.BooleanField(null=True)),
                ('address', models.CharField(max_length=100)),
                ('site', models.CharField(max_length=65)),
                ('contacts', models.PositiveBigIntegerField()),
            ],
        ),
    ]
