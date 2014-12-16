from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

from .models import Badge, BadgeSerializer

import urllib
import json

from rest_framework import generics

class BadgeList(generics.ListCreateAPIView):

    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    #paginate_by = 100
    paginate_by_param = 'count' # Allow client to override, using `?page_size=xxx`.
    #max_paginate_by = 100
    
class BadgeDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Badge


# Create your views here.


def home(request):
    
    # do something smart for mobile... display less badges for initial page render
    if request.is_mobile:
        badge_url = 'http://' + request.get_host() + '/api/v1/badges?count=10';
    else:
        badge_url = 'http://' + request.get_host() + '/api/v1/badges?count=30';
        
    # make a call to the badge api
    badge_json = urllib.urlopen(badge_url).read()
    
    data = json.loads(badge_json)
    badges = data["results"]
    
    #nextpage = data["next"]
    
    return render_to_response('badges/home.html', {'badges' : badges}, context_instance=RequestContext(request))
    
    
    