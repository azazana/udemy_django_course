from django.contrib import admin

from .models import Topic, AccessRecord, Webpage

admin.site.register(AccessRecord)
admin.site.register(Topic)
admin.site.register(Webpage)
