from django.conf.urls import url, include
from rest_framework import routers
from . import views
from rest_framework.authtoken import views as drf_views


router = routers.DefaultRouter()
router.register(r'persons', views.PersonViewSet)


urlpatterns = [
    url(r'^$', include(router.urls)),
    url(r'^auth$', drf_views.obtain_auth_token, name='auth'),
]
