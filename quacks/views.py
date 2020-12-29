from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from quacks.models import Quack

# Create your views here.
def home_view(request,*args, **kwargs):
    return render(request, "pages/home.html", context={},status=200)

def quack_list_view(request,*args, **kwargs):
    qs = Quack.objects.all()
    quacks_list = [{"id":x.id,"content":x.content} for x in qs]
    data = {
        "response":quacks_list
    }
    return JsonResponse(data)

def quack_view(request, quack_id, *args, **kwargs):
    # REST API VIEW = JSon Data
    data = {
        "id":quack_id
        # "image":obj.img.url
    }
    status = 200
    try:
        obj = Quack.objects.get(id=quack_id)
        data["content"] = obj.content
    except:
        status = 404
        data["message"] = "Quack not found."
    return JsonResponse(data, status=status) # HttpResponse("<h1>" + obj.content + "</h1>")