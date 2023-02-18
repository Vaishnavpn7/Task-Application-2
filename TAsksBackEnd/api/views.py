from django.shortcuts import render

from api.models import Tasks
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
# Create your views here.
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import authentication, permissions


class TaskSerializer(ModelSerializer):
    id = serializers.CharField(read_only=True)
    user = serializers.CharField(read_only=True)
    date = serializers.DateField(read_only=True)
    status = serializers.BooleanField(read_only=True)

    class Meta:
        model = Tasks
        fields = "__all__"


class TasksView(ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Tasks.objects.all()
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

    def get_queryset(self):
        return Tasks.objects.filter(user=self.request.user).order_by('-date')
