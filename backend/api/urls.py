from django.urls import path
from . import views

urlpatterns = [
    path('v1/create', views.create_user),
    path('v1/auth', views.auth_user),
    path('v1/add_order', views.add_order),
    path('v1/get_order_id', views.get_order_id),
    path('v1/get_orders', views.get_orders),
]
