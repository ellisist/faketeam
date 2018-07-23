# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Person(models.Model):
    name_title = models.CharField(max_length=5)
    name_first = models.CharField(max_length=50)
    name_last = models.CharField(max_length=50)
    email = models.EmailField()
    picture_large = models.CharField(max_length=100)
    picture_medium = models.CharField(max_length=100)
    picture_thumbnail = models.CharField(max_length=100)

    def __str__(self):
        return self.name_first + " " + self.name_last
