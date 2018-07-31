from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView


# Wire up our API using automatic URL routing
# Additionally, we include login URLs for the browsable API
urlpatterns = [
    url(r'^api/', include('api.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^', TemplateView.as_view(template_name="index.html")),
]
