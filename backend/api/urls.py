from django.urls import path
from . import views

urlpatterns = [
    path('', views.test_api),
    path('v1/create', views.create_user)
]