from django.shortcuts import render


def index(request):
    my_dict = {"insert_content": "Hello I am from first_app/vies.py!"}
    return render(request, "first_app\index.html", context=my_dict)
