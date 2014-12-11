from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

from .models import Badge, BadgeSerializer

import urllib
import json

# Create your views here.


def home(request):
    return render_to_response('badges/home.html', context_instance=RequestContext(request))


from rest_framework import generics

class BadgeList(generics.ListCreateAPIView):

    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    paginate_by = 100
    paginate_by_param = 'page_size' # Allow client to override, using `?page_size=xxx`.
    max_paginate_by = 100
    
class BadgeDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Badge

