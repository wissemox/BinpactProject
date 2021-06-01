from rest_framework import serializers
from .models import Caracteristique, Produit, Image, Categorie, SousCategorie, CaracteristiqueProduit
 
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image',)

class ProduitSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)# read only ?
    class Meta:
        model = Produit
        fields = ('images','nom',
        'prix_en_euros',
        'prix_en_bins',
        'categorie','sous_categorie',
        'description',
        'slug')
        extra_kwargs = {
        'prix_en_euros': {'write_only': True},
        'prix_en_bins': {'read_only': True},
        'slug': {'read_only': True},
        
        }

class CaracteristiqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caracteristique
        fields = ('caracteristique',
        'type',
        'select_champs_multiple_choices')

class CaracteristiqueProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = CaracteristiqueProduit
        fields = ('produit', 
        'caracteristique',
        'valeur')
          
        
    
 

