from basicapp import views
from django.urls import path

#Template tagging
app_name = "basicapp"

urlpatterns = [
    path("relative/", views.relative, name="relative"),
    path("other/", views.other, name="other"),
]
