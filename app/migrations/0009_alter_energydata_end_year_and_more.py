# Generated by Django 4.2.7 on 2023-11-23 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_energydata_end_year_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='energydata',
            name='end_year',
            field=models.CharField(blank=True, max_length=17, null=True),
        ),
        migrations.AlterField(
            model_name='energydata',
            name='start_year',
            field=models.CharField(blank=True, max_length=17, null=True),
        ),
    ]
