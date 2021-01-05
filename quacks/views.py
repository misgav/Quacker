from django.shortcuts import render, redirect
from django.conf import settings
from quacks.models import Quack
from .serializers import QuackSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
ALLOWED_HOSTS = settings.ALLOWED_HOSTS

# Create your views here.
def home_view(request,*args, **kwargs):
    return render(request, "pages/home.html", context={},status=200)

def profile_view(request,*args, **kwargs):
    return render(request, "pages/profile.html", context={},status=200)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def quack_create_view(request,*args, **kwargs):

    '''
    user = request.user
    if not user.is_authenticated:
        user = None
        if request.is_ajax():
            return Response({},status=401)
        return redirect(settings.LOGIN_URL)
    '''

    serializer = QuackSerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)
    return Response({},status=400)

@api_view(['DELETE','POST'])
@permission_classes([IsAuthenticated])
def quack_delete_view(request,quack_id,*args, **kwargs):
    qs = Quack.objects.filter(id=quack_id)
    user=request.user
    if not qs.exists():
        Response({"message":"Quack doesn't exist"},status=401)
    qs.first().delete()
    return Response({"message":"Quack succesfully been deleted!"}, status=200)

@api_view(['GET'])
def quack_view(request,quack_id,*args, **kwargs):
    qs = Quack.objects.filter(id=quack_id)
    if not qs.exists():
        Response({},status=404)
    serializer = QuackSerializer(qs.first())
    return Response(serializer.data, status=200)

@api_view(['GET'])
def quack_list_view(request,*args, **kwargs):
    qs = Quack.objects.all()
    serializer = QuackSerializer(qs, many=True)
    return Response(serializer.data, status=200)

#NONE REST FRAMEWORK
'''
from .forms import QuackForm
from django.http import HttpResponse, Http404, JsonResponse
from django.utils.http import is_safe_url
'''

'''def quack_create_view(request,*args, **kwargs):
    user = request.user
    if not user.is_authenticated:
        user = None
        if request.is_ajax():
            return JsonResponse({},status=403)
        return redirect(settings.LOGIN_URL)

    form = QuackForm(request.POST or None)
    next_url = request.POST.get("next") or None
    if form.is_valid():
        obj = form.save(commit=False)
        obj.user = user
        obj.save()
        if request.is_ajax():
            return JsonResponse(obj.getData(),status=201)
        #if is_safe_url("/home", ALLOWED_HOSTS):
        #    return redirect(next_url)
        form = QuackForm()
    if form.errors:
        if request.is_ajax():
            return JsonResponse(form.errors,status=400)
    return render(request, "pages/forms.html", context={"form":form},status=200) 
'''

'''
def quack_list_view(request,*args, **kwargs):
    qs = Quack.objects.all()
    quacks_list = [x.getData() for x in qs]
    data = {
        "response":quacks_list
    }
    return JsonResponse(data)
'''

'''
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
'''