from rest_framework import serializers
from leads.models import Lead
# from leads.models import Weight

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id', 'name', 'email', 'message')
#         fields = ('logId', 'weight', 'bmi', 'date', 'time')
        
# class WeightSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Weight
#         fields = ('logId', 'weight', 'bmi', 'date', 'time')