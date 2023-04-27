from django.views.generic import (ListView, DeleteView,
                                  UpdateView, TemplateView,
                                  CreateView, DetailView)
from django.urls import reverse_lazy

from . import models


class IndexView(TemplateView):
    template_name = 'index.html'


class SchoolListView(ListView):
    model = models.School
    context_object_name = "schools"


class SchoolDetailView(DetailView):
    model = models.School
    template_name = "basic_app/school_detail.html"
    context_object_name = "school_detail"


class SchoolCreateView(CreateView):
    model = models.School
    fields = ("name", "principal", "location")


class SchoolUpdateView(UpdateView):
    fields = ("name", "principal")
    model = models.School


class SchoolDeleteView(DeleteView):
    model = models.School
    success_url = reverse_lazy("basic_app:list")