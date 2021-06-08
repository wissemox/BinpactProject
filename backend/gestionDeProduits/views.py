from .models import Produit, Image, Categorie, SousCategorie, CaracteristiqueProduit, Caracteristique, ProduitsSignalé
from authentification.models import User
from django.http import HttpResponse, Http404, JsonResponse
from django.views.decorators.cache import cache_control 
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from authentification.utils import Util
from rest_framework.decorators import api_view 
from rest_framework.parsers import JSONParser 
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.filters import SearchFilter, OrderingFilter
from .serializers import ProduitSerializer, ImageSerializer, CaracteristiqueSerializer
import json


@cache_control(no_cache=True, must_revalidate=True, no_store=True)   
@api_view(['GET'])
def index(request): 
    if request.user.is_authenticated:
        #Lister products created by current user
        produits = Produit.objects.filter(owner=request.user)
        #The many=True argument specified serializes multiple Produit instances.
        serializer_data=[]
        for produit in produits:
            data = ProduitSerializer(produit).data
            data['categorie'] = produit.categorie.categorie
            data['sous_categorie'] = produit.sous_categorie.sous_categorie
            serializer_data.append(data)    
        return JsonResponse(serializer_data, safe=False) 
    else:
        raise Http404("You are not logged in!")

@cache_control(no_cache=True, must_revalidate=True, no_store=True)       
@api_view(['GET'])
def detail_view(request, slug):
    if request.user.is_authenticated:
        # fetch the object related to passed slug and created by current user
        try :
            produit = Produit.objects.get(slug=slug,owner= request.user)
        except Produit.DoesNotExist:
            return HttpResponse(status=404)    
        serializer = ProduitSerializer(produit)
        serializer_data = serializer.data

        #Get the product characteristics
        get_caracteristiques_produit(produit, serializer_data)

        #Get the product category and sub category name    
        serializer_data['categorie'] = produit.categorie.categorie
        serializer_data['sous_categorie'] = produit.sous_categorie.sous_categorie
        
        return JsonResponse(serializer_data, safe=False)
    else:
        raise Http404("You are not logged in!")

@cache_control(no_cache=True, must_revalidate=True, no_store=True)      
@api_view(['GET'])         
def get_caracteristiques_sousCategorie(request, sous_categorie_id) :
    
    caracteristiques_sous_categorie = Caracteristique.objects.filter(sous_categorie_id = sous_categorie_id)
    caracteristiques_serializer = CaracteristiqueSerializer(caracteristiques_sous_categorie, many = True)
    return JsonResponse(caracteristiques_serializer.data, status=201, safe = False)        

@cache_control(no_cache=True, must_revalidate=True, no_store=True)   
@api_view(['POST'])
def upload(request):
    if request.user.is_authenticated:
        #Upload both image and JSON in a single call
        images = request.FILES.getlist("images")
        data = json.loads(request.POST['data'])
        if len(images)>=1 and len(images)<=5:
            serializer = ProduitSerializer(data=data)
            if serializer.is_valid():
                prix_en_bins = convert_euros_bins(data['prix_en_euros'])
                produitCreated = serializer.save(owner=request.user, prix_en_bins=prix_en_bins)
                for image in images:
                    photo = Image.objects.create(produit = produitCreated, image = image,)
                upload_caracteristiques_produit(data, produitCreated)
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)
        else:
            raise Http404("You are enable to upload 1 to 5 images")
    else: 
        raise Http404("You are not logged in!")

@cache_control(no_cache=True, must_revalidate=True, no_store=True)      
@api_view(['PUT']) 
def update_produit(request, slug):
    if request.user.is_authenticated:
        try :
            produit = Produit.objects.get(slug=slug,owner= request.user)
        except Produit.DoesNotExist:
            return HttpResponse(status=404)  

        images = request.FILES.getlist("images")
        data = json.loads(request.POST['data'])         
        #data = JSONParser().parse(request)
        serializer = ProduitSerializer(produit, data=data)  
        # update product 
        if serializer.is_valid():
            prix_en_bins = convert_euros_bins(data['prix_en_euros'])
            produit_updated = serializer.save(owner=request.user, prix_en_bins = prix_en_bins)
            # update images belong to the product
            imagesProduit = Image.objects.filter(produit = produit_updated)
            imagesProduit.delete()
            for image in images:
                photo = Image.objects.create(produit = produit_updated, image = image,)
            # update characteristic belong to the product
            update_caracteristiques_produit(data, produit_updated)
            #return JsonResponse(serializer.data)
            return HttpResponse(status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        raise Http404("You are not logged in!")

@cache_control(no_cache=True, must_revalidate=True, no_store=True)    
@api_view(['DELETE'])
def delete_produit(request, slug):
    if request.user.is_authenticated:
        ## check if this produit is created by current user. 
        # if it is than allow to delete else raise error
        try :
            produit = Produit.objects.get(slug=slug,owner= request.user)
        except Produit.DoesNotExist:
            return HttpResponse(status=404) 
        # every object refrenced to the product will be soft deleted (caracteristique, images ) because of 
        # on_delete=models.CASCADE parameter
        produit.delete()

        return HttpResponse(status=204)
    else:
        raise Http404("You are not logged in!")

@cache_control(no_cache=True, must_revalidate=True, no_store=True)    
@api_view(['POST'])
def signaler_produit(request, slug):
    if request.user.is_authenticated:
        try :
            produit = Produit.objects.get(slug=slug)
        except Produit.DoesNotExist:
            return HttpResponse(status=404) 
        reason  = request.POST['reason']    
        ProduitsSignalé.objects.create(produit = produit, reason = reason,)
        # for now send email if a product was reported after it will be notification in the admin platform
        staff_users = User.objects.filter(is_staff = True)
        subject = 'A new product was reported'
        motif = str(produit.nom) + ' created by ' + str(produit.owner) + ' was reported!' 
        for email in staff_users:
            data = {'email_body': motif, 'to_email': email,
                    'email_subject': subject}

            Util.send_email(data)
        
        return HttpResponse(status=201)
    else:
        raise Http404("You are not logged in!")        


def convert_euros_bins(euros):
    x = 10
    bins = str(x*int(euros))
    return bins

def upload_caracteristiques_produit(data, produit):
    
    for caracteristique in data['caracteristiques']:
        caracteristiqueGet = Caracteristique.objects.get(sous_categorie = data['sous_categorie'], caracteristique = caracteristique['name'] )
        type_caracteristique = caracteristiqueGet.type
        caracteristiqueProduit = CaracteristiqueProduit.objects.create( produit = produit, caracteristique = caracteristiqueGet)
        
        if  type_caracteristique == "select" or type_caracteristique == "texte":
            caracteristiqueProduit.texteAndselect_valeur = caracteristique['value']

        elif  type_caracteristique == "champs multiple":
                caracteristiqueProduit.champs_multiple_valeur = caracteristique['value']

        elif  type_caracteristique ==  "date":
                caracteristiqueProduit.date_valeur = caracteristique['value']
   
        caracteristiqueProduit.save()

def update_caracteristiques_produit(data, produit):
    
    for caracteristique in data['caracteristiques']:
        caracteristiqueGet = Caracteristique.objects.get(sous_categorie = data['sous_categorie'], caracteristique = caracteristique['name'] )
        type_caracteristique = caracteristiqueGet.type
        try:
            caracteristiqueProduit = CaracteristiqueProduit.objects.get( produit = produit, caracteristique = caracteristiqueGet)
        except CaracteristiqueProduit.DoesNotExist:
            caracteristiqueProduit = CaracteristiqueProduit.objects.create( produit = produit, caracteristique = caracteristiqueGet)

        if  type_caracteristique == "select" or type_caracteristique == "texte":
            caracteristiqueProduit.texteAndselect_valeur = caracteristique['value']

        elif  type_caracteristique == "champs multiple":
                caracteristiqueProduit.champs_multiple_valeur = caracteristique['value']

        elif  type_caracteristique ==  "date":
                caracteristiqueProduit.date_valeur = caracteristique['value']
    
        caracteristiqueProduit.save()       

def get_caracteristiques_produit(produit, serializer_data):

    caracteristiques_produit = CaracteristiqueProduit.objects.filter(produit = produit)
    for caracteristique_produit in caracteristiques_produit:
        nom_caracteristique = caracteristique_produit.caracteristique.caracteristique
        type_caracteristique = caracteristique_produit.caracteristique.type

        if  type_caracteristique == "select" or type_caracteristique == "texte":
            valeur_caracteristique = caracteristique_produit.texteAndselect_valeur

        elif  type_caracteristique == "champs multiple":
            valeur_caracteristique = caracteristique_produit.champs_multiple_valeur

        elif  type_caracteristique == "date":
            valeur_caracteristique = caracteristique_produit.date_valeur
        
        serializer_data[nom_caracteristique] = valeur_caracteristique

class ApiProduitsListView(ListAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
    pagination_class = PageNumberPagination

    filter_backends = (SearchFilter, OrderingFilter)
    filter_fields = ('categorie__categorie','sous_categorie__categorie')
    search_field = (
        'nom',
        'marque',
        'modele',
        'critere',
        'description', 
        'owner__username'
    )
