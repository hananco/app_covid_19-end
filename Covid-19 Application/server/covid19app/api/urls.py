from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('add/', views.addData),
    path('cityfilter/', views.selectDataByCity),
    path('datefilter/', views.selectDataByDate)
]