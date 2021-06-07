from django.contrib import admin
from django.db import models
from .models import Produit, Image, Categorie, SousCategorie, Caracteristique, CaracteristiqueProduit
from django.contrib.admin.helpers import ActionForm
from django import forms
from authentification.utils import Util
from datetime import timedelta, date
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin
from django_better_admin_arrayfield.forms.widgets import DynamicArrayTextareaWidget
from django_better_admin_arrayfield.models.fields import DynamicArrayField




# Register your models here.
class CategorieAdmin(admin.ModelAdmin):
    #model = Categorie
    list_display = ('categorie',)
    #inlines = [SousCategorieAdmin,]

class SousCategorieAdmin(admin.ModelAdmin):
    #model = SousCategorie
    list_display = ('categorie','sous_categorie',)
    #inlines = [CategorieAdmin,]



class CaracteristiqueAdmin(admin.ModelAdmin, DynamicArrayMixin):
    ...
    formfield_overrides = {
        DynamicArrayField : {'widget': DynamicArrayTextareaWidget},
    }
    list_display = ('sous_categorie', 'caracteristique', 'type', 'select_champs_multiple_choices')      

class PublishActionForm(ActionForm):
    motif = forms.CharField(required=False, widget = forms.Textarea)
    
class ProduitAdmin(admin.ModelAdmin):
    list_display = ('nom',
        'prix_en_euros',
        'prix_en_bins',
        'categorie','sous_categorie',
        'description','quantite','owner','status')
    fields = (
    'nom',
    'prix_en_euros',
    'prix_en_bins',
    'categorie',
    'sous_categorie',
    'description','quantite','owner','status') 
    actions = ['publish_product', 'unpublish_product']
    action_form = PublishActionForm

    def unpublish_product(self, request, queryset):
        motif = request.POST['motif']
        queryset.update(status = 'unpublished')
        deadline_unpublished =  date.today() + timedelta(days = 3) 
        queryset.update(deadline_unpublished = deadline_unpublished)
        subject = 'Refus de publication de votre produit'
        
        for produit in queryset:
            email = produit.owner
            data = {'email_body': motif, 'to_email': email,
                    'email_subject': subject}

            Util.send_email(data)

    def publish_product(self, request, queryset):
        queryset.update(status = 'published')        




admin.site.register(Produit, ProduitAdmin)
admin.site.register(Image)
admin.site.register(Categorie, CategorieAdmin)
admin.site.register(SousCategorie,SousCategorieAdmin)
admin.site.register(Caracteristique, CaracteristiqueAdmin)
#admin.site.register(CaracteristiqueProduit) # it should be deleted 
