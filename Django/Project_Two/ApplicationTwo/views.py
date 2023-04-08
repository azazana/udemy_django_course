from django.shortcuts import render

from . import forms
from .models import Users


# Create your views here.

def index(request):
    return render(request, "ApplicationTwo/index.html")


def help(request):
    return render(request, "ApplicationTwo/help.html", context={"help": "HELP"})


def users(request):
    users = Users.objects.order_by('last_name')
    return render(request, "ApplicationTwo/users.html", context={"users": users})


def user(request):
    user = forms.FormUser()
    if request.method == "POST":
        user = forms.FormUser(request.POST)
        if user.is_valid():
            user.save()
            return index(request)
        else:
            raise ValueError("Error value!")
    return render(request, "ApplicationTwo/users.html")
