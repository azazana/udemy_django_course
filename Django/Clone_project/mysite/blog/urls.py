from django.urls import path

from . import views

urlpatterns = [
    path("", views.PostListView.as_view(), name="post_list"),
    path("about/", views.AboutView.as_view(), name="about"),
    path("post/<int:pk>", views.PostDetailView.as_view(), name="post_detail"),
    path("post/new/", views.PostCreateView.as_view(), name="post_new"),
    path("post/<int:pk>/update/", views.PostUpdateView.as_view(), name="post_update"),
    path("post/<int:pk>/delete/", views.PostDetailView.as_view(), name="post_delete"),
    path("drafts/", views.DeleteView.as_view(), name="post_draft_list"),
    path("post/<int:pk>/comment/",views.add_comment_to_post,name="add_comment_to_post"),
    path("comment/<int:pk>/approve/",views.comment_approve,name="comment_approve"),
    path("comment/<int:pk>/remove/", views.comment_remove, name="comment_remove"),
    path("post/<>int:pk/piblish/",views.post_publish,name="post_publish"),
]
