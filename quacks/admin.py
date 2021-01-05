from django.contrib import admin
from .models import Quack

# Register your models here.
admin.site.register(Quack)

class Admin(admin.ModelAdmin):
    list_display = ['__str__','user']
    search_fields = ['content','user__username','user__email']
    class Meta:
        model = Quack