from django.db import models

# Create your models here.
# class CitizensData(models.Model):
#     firstName = models.CharField(max_length=100, null=False)
#     lastName = models.CharField(max_length=100, null=False)
#     birthDate = models.CharField(max_length=100,null=False)
#     address = models.CharField(max_length=100, null=False)
#     city = models.CharField(max_length=40, null=False)
#     zipcode = models.IntegerField(null=True)
#     landLine = models.IntegerField(null=False)
#     cellularPhone = models.IntegerField(null=False)
#     isInfected = models.BooleanField(null=False, default=False)
#     other = models.TextField(max_length=40, null=False)

class CitizensInfo(models.Model):
    firstName = models.CharField(max_length=100, null=False)
    lastName = models.CharField(max_length=100, null=False)
    birthDate = models.CharField(max_length=100,null=False)
    address = models.CharField(max_length=100, null=False)
    city = models.CharField(max_length=40, null=False)
    zipcode = models.IntegerField(null=True)
    landLine = models.IntegerField(null=False)
    cellularPhone = models.IntegerField(null=False)
    isInfected = models.BooleanField(null=False, default=False)
    other = models.TextField(max_length=40, null=False)
