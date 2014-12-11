from django.conf.urls import patterns, include, url

#from django.contrib import admin
#admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    
    # url(r'^blog/', include('blog.urls')),
    #url(r'^admin/', include(admin.site.urls)),
    
    # include applications
    #url(r'^', include('app_name.urls')),
    
    # route /api/v1 calls to the badges app
    #url(r'^api/v1', include('badges.urls')),
    
    url(r'^badges/', include('badges.urls')),
    
    url(r'^test/', 'pjaxified.views.test', name='test'),
    
    url(r'^', 'pjaxified.views.example', name='example'),
    
    
)
