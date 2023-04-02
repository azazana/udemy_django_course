from django.urls import re_path

from . import views

urlpatterns = [
    re_path("^$", views.index, name="index"),
    re_path("^help", views.help, name="help"),
]
