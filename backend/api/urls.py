from django.urls import path
from . import views

urlpatterns = [
    path('', views.test_api),
    path('v1/create', views.create_user),
    path('v1/auth', views.auth_user),

]