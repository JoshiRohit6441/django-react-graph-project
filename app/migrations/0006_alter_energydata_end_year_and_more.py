# Generated by Django 4.2.7 on 2023-11-23 04:29

import app.models
import datetime
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_energydata_added_alter_energydata_end_year_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='energydata',
            name='end_year',
            field=app.models.CustomDateTimeField(blank=True, default=datetime.datetime(1, 1, 1, 0, 0), null=True),
        ),
        migrations.AlterField(
            model_name='energydata',
            name='start_year',
            field=app.models.CustomDateTimeField(blank=True, default=datetime.datetime(1, 1, 1, 0, 0), null=True),
        ),
    ]