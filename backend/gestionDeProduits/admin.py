from django.contrib import admin
from django.db import models
from .models import Produit, Image, Categorie, SousCategorie, Caracteristique, CaracteristiqueProduit
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

"""class CaracteristiqueAdmin(admin.ModelAdmin, DynamicArrayMixin):
    ...
    formfield_overrides = {
        DynamicArrayField : {'widget': DynamicArrayTextareaWidget},
    }
    list_display = ('sous_categorie', 'caracteristique', 'type', 'select', 'champs_multiple', 'texte', 'date') """

class CaracteristiqueAdmin(admin.ModelAdmin, DynamicArrayMixin):
    ...
    formfield_overrides = {
        DynamicArrayField : {'widget': DynamicArrayTextareaWidget},
    }
    list_display = ('sous_categorie', 'caracteristique', 'type', 'select_champs_multiple_choices')       


admin.site.register(Produit)
admin.site.register(Image)
admin.site.register(Categorie, CategorieAdmin)
admin.site.register(SousCategorie,SousCategorieAdmin)
admin.site.register(Caracteristique, CaracteristiqueAdmin)
admin.site.register(CaracteristiqueProduit) # it should be deleted 
