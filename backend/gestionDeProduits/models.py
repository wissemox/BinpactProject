from django.db import models
from authentification.models import User
from safedelete.models import SafeDeleteModel, SOFT_DELETE_CASCADE
from django.utils.text import slugify
import string
import random
from django_better_admin_arrayfield.models.fields import ArrayField



def rand_slug():
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(6))
# Create your models here.
class Categorie(models.Model):

    categorie =  models.CharField(max_length=50)

    def __str__(self):
        return self.categorie

class SousCategorie(models.Model):

    sous_categorie =  models.CharField(max_length=50)
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE) 
    
    def __str__(self):
        return self.sous_categorie


STATUS_CHOICES = (
        ('published', 'PUBLISHED'),
        ('unpublished', 'UNPUBLISHED'),
        )

class Produit(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE
    produit_id = models.BigAutoField(primary_key=True)
    nom = models.CharField(max_length=50)
    prix_en_euros = models.IntegerField()
    prix_en_bins = models.IntegerField()
    #Set category field  to null if the referenced category is deleted
    categorie = models.ForeignKey(Categorie,on_delete=models.SET_NULL,blank=True,null=True,)
    sous_categorie = models.ForeignKey(SousCategorie,on_delete=models.SET_NULL,blank=True,null=True,)
    description = models.CharField(max_length=300)
    quantite = models.IntegerField(default = 1)
    status = models.CharField(choices=STATUS_CHOICES, max_length = 30, default='published')
    deadline_unpublished = models.DateTimeField(null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE) 
    slug = models.SlugField(max_length=250,null=False, unique=True) 
                       
    class Meta:
        app_label = 'gestionDeProduits'
        managed = True
    def get_absolute_url(self):
        kwargs = {
            'slug': self.slug
        }
        return reverse('produit_detail', kwargs=kwargs)    
    def save(self, *args, **kwargs):
        value = self.nom
        self.slug = slugify(rand_slug() + "-" + value)
        super().save(*args, **kwargs)


class Image(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE
    produit = models.ForeignKey(Produit,related_name='images', on_delete=models.CASCADE) 
    image = models.ImageField()   
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        app_label = 'gestionDeProduits'
        managed = True 


class Caracteristique(models.Model):

    TYPE_CHOICES = (
        ('select', 'Select'),
        ('champs multiple', 'Champs multiple'),
        ('texte', 'Texte'),
        ('date', 'Date'),
        )
    
    sous_categorie = models.ForeignKey(SousCategorie,on_delete=models.SET_NULL, null = True)   
    caracteristique = models.CharField(max_length = 50)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default = 'texte')
    select_champs_multiple_choices = ArrayField(models.CharField(max_length=255), blank = True, null = True)
    
    
class CaracteristiqueProduit(SafeDeleteModel):

    _safedelete_policy = SOFT_DELETE_CASCADE
    produit = models.ForeignKey(Produit,on_delete=models.CASCADE)
    caracteristique = models.ForeignKey(Caracteristique,on_delete=models.SET_NULL,blank=True,null=True,)
    champs_multiple_valeur = ArrayField(models.CharField(max_length=255), blank = True, null = True)
    texteAndselect_valeur = models.CharField(max_length=255, blank=True, null=True)
    date_valeur = models.DateField( blank=True, null=True)


    