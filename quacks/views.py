from django.shortcuts import render, redirect
from django.conf import settings
from django.http import HttpResponse, Http404, JsonResponse
from django.utils.http import is_safe_url
from quacks.models import Quack
from .forms import QuackForm

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

# Create your views here.
def home_view(request,*args, **kwargs):
    return render(request, "pages/home.html", context={},status=200)

def profile_view(request,*args, **kwargs):
    return render(request, "pages/profile.html", context={},status=200)

def quack_create_view(request,*args, **kwargs):
    form = QuackForm(request.POST or None)
    next_url = request.POST.get("next") or None
    if form.is_valid():
        obj = form.save(commit=False)
        obj.save()
        #if request.is_ajax():
        #    return JsonResponse({obj.getData()},status=201)
        if is_safe_url("/home", ALLOWED_HOSTS):
            return redirect(next_url)
        form = QuackForm()
    return render(request, "pages/forms.html", context={"form":form},status=200) 

def quack_list_view(request,*args, **kwargs):
    qs = Quack.objects.all()
    quacks_list = [x.getData() for x in qs]
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