
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from django.contrib.sitemaps.views import sitemap

from django.views.generic.base import TemplateView

# from home.sitemap import DrameSitemap

from .sitemap import StaticViewSitemap

# sitemaps = {
#     'home': DrameSitemap,
# }


sitemaps = {
    'static': StaticViewSitemap,
}


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),

    path('robots.txt',TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),
    # path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),

    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
