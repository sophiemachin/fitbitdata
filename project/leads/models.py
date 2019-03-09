from django.db import models

# Create your models here.

# class Lead(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     message = models.CharField(max_length=300)
#     created_at = models.DateTimeField(auto_now_add=True)


class Lead(models.Model):
    logId = models.IntegerField(unique=True)
    weight = models.FloatField()
    bmi = models.FloatField()
    fat = models.FloatField()
    date = models.DateField()
    time = models.TimeField()
