from django.shortcuts import render

# Create your views here.


def grants_view(request):
    return render(request, 'grants.html', {})
