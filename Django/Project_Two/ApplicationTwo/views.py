from django.http.response import HttpResponse
from django.shortcuts import render


# Create your views here.

def index(request):
    return HttpResponse('<em>My Second App</em>')


def help(request):
    return render(request, "ApplicationTwo/help.html", context={"help": "HELP"})
