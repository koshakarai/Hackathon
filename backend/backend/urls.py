from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('api/', include('api.urls')),
    path('api/v1/drf-auth/', include('rest_framework.urls'))
]
