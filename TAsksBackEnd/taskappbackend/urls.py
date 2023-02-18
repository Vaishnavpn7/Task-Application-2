from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from api import views
router=DefaultRouter()
router.register("tasks",views.TasksView,basename="tasks")
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("token/",views.obtain_auth_token)
]+router.urls
# http://127.0.0.1:8000/