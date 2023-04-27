from basic_app import views
from django.urls import path

app_name = "basic_app"

urlpatterns = [
    path(r"", views.SchoolListView.as_view(), name="list"),
    path(r"<int:pk>", views.SchoolDetailView.as_view(), name="detail"),
    path(r'create/', views.SchoolCreateView.as_view(), name="create"),
    path(r'update/<int:pk>', views.SchoolUpdateView.as_view(), name="update"),
    path(r'delete/<int:pk>', views.SchoolDeleteView.as_view(), name="delete"),
]
