from django.shortcuts import render

# Create your views here.
def bubble_view(request):
    return render(request, 'bubble.html', {})