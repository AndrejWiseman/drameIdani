from django.contrib.sitemaps import Sitemap


class DrameSitemap(Sitemap):
    # define how often your website will change, the priority, and the protocol used to access your site
    changefreq = 'weekly'  # can be weekly daily always monthly yearly or never
    priority = 1.0  # on a scale of 0.0 to 1.0
    protocol = 'https'  # use https when you deploy your website and are using a secure connection

    # define the posts you want in your sitemap here
    # def items(self):
    #     return BlogPost.objects.all()

    # will return the last time an article was updated
    # def lastmod(self, obj):
    #     return obj.published_on

    # returns the URL of the article object
    # def location(self, obj):
    #     return f'/blog/{obj.slug}'