from rest_framework import serializers
from .models import Offre, OffreProduit
from gestionDeProduits.serializers import ProduitSerializer
from gestionDeProduits.models import Produit

class OffreCreateSerializer(serializers.ModelSerializer):
    produits = serializers.ListField(write_only=True)
    class Meta:
        model = Offre
        fields = "__all__"

        extra_kwargs = {
            'status': {'read_only': True},
            'offre_owner': {'read_only': True},
            }
    def create(self, validated_data):
        
        produits_id = validated_data.pop('produits')
        offreCreated = Offre.objects.create(**validated_data)
        """offre_id = offreCreated.pk
        
        list_produits_id = self.request.POST.get('list_produits_id')   
        list_offreProduit = [OffreProduit(offre_id = offre_id, produit_id = produit_id) for produit_id in list_produits_id ]
        OffreProduit.objects.bulk_create(list_offreProduit)  """
        for produit_id in produits_id:
            produit = Produit.objects.get(produit_id = produit_id)
            offreCreated.produits.add(produit)
        return offreCreated        
class OffreListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offre
        fields = '__all__'
        extra_kwargs = {
                'status': {'read_only': True},
                'offre_owner': {'read_only': True},
                }

class OffreRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offre
        fields = '__all__'
