from django.shortcuts import render
from first_app.models import AccessRecord


def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = {'access_records': webpages_list}
    # my_dict = {"insert_content": "Hello I am from first_app/vies.py!"}
    return render(request, "first_app\index.html", context=date_dict)
