from django.shortcuts import render

# Create your views here.


def speech_view(request):
    return render(request, 'speech.html', {})
