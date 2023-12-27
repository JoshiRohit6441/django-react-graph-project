from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EnergyDataViews

router = DefaultRouter()
router.register(r"energydata", EnergyDataViews)

urlpatterns = [
    path("", include(router.urls)),
]
