from django.http.response import HttpResponse
from django.shortcuts import render

from .models import Users


# Create your views here.

def index(request):
    return render(request,"ApplicationTwo/index.html")


def help(request):
    return render(request, "ApplicationTwo/help.html", context={"help": "HELP"})


def users(request):
    users = Users.objects.order_by('last_name')
    return render(request, "ApplicationTwo/users.html", context={"users": users})
