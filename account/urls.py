from django.conf.urls import patterns, url
from rest_framework.authtoken import views
from .views import LoginView, LogoutView

urlpatterns = patterns('',
    url(r'^login/$', LoginView.as_view()),
    url(r'^logout/$', LogoutView.as_view()),
    url(r'^api-auth-token/$', views.obtain_auth_token),
)

