from django.conf.urls import url
from . import views
from model.views import ModelView

urlpatterns = [
    url(r'^$', ModelView.as_view()),
]