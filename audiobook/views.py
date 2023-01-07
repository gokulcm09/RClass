from django.shortcuts import render

# Create your views here.
def audiobook_view(request):
    return render(request, 'audiobook.html', {})