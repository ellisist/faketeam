# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from userpage.models import Person
from rest_framework import viewsets
from .serializers import PersonSerializer


class PersonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows persons to be viewed or edited
    """
    queryset = Person.objects.all().order_by('name_last')
    serializer_class = PersonSerializer
