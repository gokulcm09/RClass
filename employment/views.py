from django.shortcuts import render

# Create your views here.


def employment_view(request):
    return render(request, 'employment.html', {})
