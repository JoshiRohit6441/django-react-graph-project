from django.db import models
from datetime import datetime


class CustomDateTimeField(models.DateTimeField):
    def to_python(self, value):
        if value in [None, '']:
            return None
        if isinstance(value, str):
            try:
                return datetime.strptime(value, '%Y-%m-%dT%H:%M')
            except ValueError:
                pass
        return super().to_python(value)


class EnergyData(models.Model):
    end_year = models.CharField(blank=True, null=True,max_length=17,default=None)
    intensity = models.IntegerField(blank=True, null=True)
    sector = models.CharField(max_length=50, blank=True, null=True)
    topic = models.CharField(max_length=50, blank=True, null=True)
    insight = models.TextField(blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    region = models.CharField(max_length=50, blank=True, null=True)
    start_year = models.CharField(blank=True, null=True,max_length=17,default=None)
    impact = models.CharField(max_length=50, blank=True, null=True)
    added = CustomDateTimeField(blank=True, null=True,default="0000-00-00T00:00")
    published = CustomDateTimeField(blank=True, null=True,default="0000-00-00T00:00")
    country = models.CharField(max_length=50, blank=True, null=True)
    relevance = models.IntegerField(blank=True, null=True)
    pestle = models.CharField(max_length=50, blank=True, null=True)
    source = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=500, blank=True, null=True)
    likelihood = models.IntegerField(blank=True, null=True)

    def save(self, *args, **kwargs):
            # if self.end_year:
            #     self.end_year_str = self.end_year.strftime('%Y-%m-%dT%H:%M')
            # if self.start_year:
            #     self.start_year_str = self.start_year.strftime('%Y-%m-%dT%H:%M')
            if self.added:
                self.added_str = self.added.strftime('%Y-%m-%dT%H:%M')  
            if self.published:
                self.published_str = self.published.strftime('%Y-%m-%dT%H:%M')  

            super().save(*args, **kwargs)
