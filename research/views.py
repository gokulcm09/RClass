from django.shortcuts import render

# Create your views here.


def research_view(request):
    return render(request, 'research.html', {})
