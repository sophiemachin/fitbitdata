from django.shortcuts import render

# Create your views here.

from leads.models import Lead
from leads.models import Weight
from leads.serializers import LeadSerializer
from leads.serializers import WeightSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    
class WeightListCreate(generics.ListCreateAPIView):
    queryset = Weight.objects.all()
    serializer_class = WeightSerializer