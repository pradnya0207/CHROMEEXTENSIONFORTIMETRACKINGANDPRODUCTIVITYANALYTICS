from django.urls import path
from .views import home, track_time

urlpatterns = [
    path('', home),
    path('api/track/', track_time),
]