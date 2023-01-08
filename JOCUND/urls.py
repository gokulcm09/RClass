"""JOCUND URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from homepage.views import homepage
from authentication.views import login_view, logout_view, test
from dashboard.views import dash_view
from transaction.views import transaction_view, request_view
from jclass.views import jclass_view, jclass_launch
from games.views import games_view
from bubble.views import bubble_view
from audiobook.views import audiobook_view
from video.views import video_view
from calc.views import calc_view
from speech.views import speech_view
from employment.views import employment_view
from grants.views import grants_view
from research.views import research_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage, name="homepage"),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('dashboard/', dash_view, name='dashboard'),
    path('transaction/', transaction_view, name='transaction'),
    path('request/', request_view, name='request'),
    path('jclass/', jclass_view, name='jclass'),
    path('jclassL/', jclass_launch, name='jclassL'),
    path('test/', test, name='test'),
    path('games/', games_view, name='games'),
    path('bubble/', bubble_view, name='bubble'),
    path('audiobook/', audiobook_view, name='audiobook'),
    path('video/', video_view, name='video'),
    path('calc/', calc_view, name='calc'),
    path('speech/', speech_view, name='speech'),
    path('employment/', employment_view, name='employment'),
    path('grants/', grants_view, name='grants'),
    path('research/', research_view, name='research')
]
