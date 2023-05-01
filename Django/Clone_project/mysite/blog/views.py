from time import timezone

from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import (TemplateView, ListView,
                                  DeleteView, CreateView,
                                  UpdateView, )

from .forms import PostForm
from .models import Post


# Create your views here.

class AboutView(TemplateView):
    template_name = "about.html"


class PostListView(ListView):
    model = Post

    def get_queryset(self):
        return Post.objects.filter(published__lte=timezone.now()).order_by("-published_date")


class PostDetailView(DeleteView):
    model = Post


class PostCreateView(LoginRequiredMixin, CreateView):
    login_url = "/login/"
    redirect_field_name = "blog/post_detail.html"
    form_class = PostForm
    model = Post


class PostUpdateView(LoginRequiredMixin, UpdateView):
    login_url = "/login/"
    redirect_field_name = "blog/post_detail.html"
    form_class = PostForm
    model = Post


class PostDelete(LoginRequiredMixin, DeleteView):
    model = Post
    success_url = reverse_lazy("post_list")


class DraftListView(LoginRequiredMixin, ListView):
    login_url = "/login."
    redirect_field_name = "blog/post_list.html"
    model = Post

    def get_queryset(self):
        return Post.objects.filter(pulished_date__isnull=True).order_by("created_date")


