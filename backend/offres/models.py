from django.db import models
from authentification.models import User
from gestionDeProduits.models import Produit
from safedelete.models import SafeDeleteModel, SOFT_DELETE_CASCADE


STATUS_CHOICES = (
        ('pending', 'PENDING'),
        ('accepted', 'ACCEPTED'),
        ('refused', 'REFUSED'),
        ('under negotiation', 'UNDER NEGOTIATION'),
        )

TYPE_TROC_CHOICES = (
        ('produits contre produits', 'PRODUITS CONTRE PRODUITS'),
        ('produits contre bynz', 'PRODUITS CONTRE BYNZ'),
        ('produits contre produits + bynz', 'PRODUITS CONTRE PRODUITS + BYNZ'),
        ('produits + bynz contre produits', 'PRODUITS + BYNZ CONTRE PRODUITS'),
        )
# Create your models here.

class Offre(models.Model):

    bynz = models.FloatField()
    offre_owner = models.ForeignKey(User, related_name= "offre_owner", on_delete=models.CASCADE)  
    offre_receiver = models.ForeignKey(User, related_name= "offre_receiver", on_delete=models.CASCADE)  
    status = models.CharField(choices = STATUS_CHOICES, max_length = 45, default='pending')
    type_troc = models.CharField(choices = TYPE_TROC_CHOICES, max_length = 100, default='produits contre produits')
    produits = models.ManyToManyField(Produit, through = 'OffreProduit')

    def accept_offre(self):
        self.status = 'accepted'
        self.save()

    def refuse_offre(self):
        self.status = 'refused'
        self.save()

class OffreProduit(models.Model):

    offre = models.ForeignKey(Offre, on_delete = models.CASCADE)
    produit = models.ForeignKey(Produit, on_delete = models.CASCADE)
    
