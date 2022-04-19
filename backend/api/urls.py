from django.urls import path
from . import views

urlpatterns = [
    path('', views.test_api),
    path('/api/v1/create', views.create_user)
]