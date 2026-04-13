from django.contrib import admin
from django.urls import path
from tracker.views import home, track_time

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('track/', track_time),
]