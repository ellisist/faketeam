from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from api import views


# Routers provide an easy way of automatically determining the URL conf
router = routers.DefaultRouter()
router.register(r'persons', views.PersonViewSet)


# Wire up our API using automatic URL routing
# Additionally, we include login URLs for the browsable API
urlpatterns = [
    url(r'^api/', include('api.urls')),
    url(r'^users/', include('userpage.urls')),
    url(r'^admin/', admin.site.urls),
]
