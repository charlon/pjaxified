from django.db import models
import datetime

class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    presenters = models.TextField()
    badge_class = models.CharField(max_length=100)
    badge_pin = models.IntegerField(max_length=10)

class User(models.Model):
    netid = models.CharField(max_length=8, unique=True)
    name = models.CharField(max_length=100)
    user_photo = models.CharField(max_length=100)

class BadgeAward(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    badge = models.ForeignKey('Badge')
    user = models.ForeignKey('User')
    

from rest_framework import serializers

class BadgeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Badge
        fields = ('id', 'name', 'description')

