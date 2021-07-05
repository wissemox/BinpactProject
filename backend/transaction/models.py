from django.db import models
from offres.models import Offre


STATUS_CHOICES = (
        ('compeleted', 'COMPLETED'),
        )

# Create your models here.

class Prestataire(models.Model):
    adresse = models.CharField(max_length = 45)
    code_postal = models.CharField(max_length = 45)
    ville = models.CharField(max_length = 45)
    pays = models.CharField(max_length = 45)
    tel = models.CharField(max_length = 45)
    email = models.EmailField()
    logo = models.CharField(max_length = 45)
    horaire_travail = models.CharField(max_length = 45)


class DeliveryOption(models.Model):
    type = models.CharField(max_length = 45)
    prix = models.FloatField(blank=True, null=True)
    prestataire = models.ForeignKey(Prestataire, on_delete=models.CASCADE)



class Transaction(models.Model):
    status = models.CharField(choices = STATUS_CHOICES, max_length = 45, default='pending')
    offre = models.ForeignKey(Offre, on_delete= models.CASCADE)
    #date_send = 
    #date_receive = 
    delivery_option =  models.ForeignKey(DeliveryOption, related_name = "delivery_option",on_delete= models.CASCADE)
    deposit_option =  models.ForeignKey(DeliveryOption, related_name = "deposit_option", on_delete= models.CASCADE)
    package_location = models.CharField(max_length = 45)
