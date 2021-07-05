from .serializers import OffreCreateSerializer, OffreListSerializer, OffreRetrieveSerializer
from .models import Offre, OffreProduit
from django.db.models import Q
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from authentification.utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

# Create your views here.
class ApiOffreCreateView(CreateAPIView):
    serializer_class = OffreCreateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(offre_owner=self.request.user, status = 'pending')
    


class ApiOffreListView(ListAPIView):
    serializer_class = OffreListSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination
    def get_queryset(self):
        """
        This view should return a list of all the offers
        for the currently authenticated user.
        """
        user = self.request.user
        return Offre.objects.filter(Q(offre_owner = user) | Q(offre_receiver = user))

class ApiOffreRetrieveView(RetrieveAPIView):
    serializer_class = OffreRetrieveSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        queryset = Offre.objects.filter( Q(pk=self.kwargs.get('pk')) & (Q(offre_owner = user) | Q(offre_receiver = user)) )
        return queryset 


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def accept_offre(request, id):

    try :
        offre = Offre.objects.get(id = id , offre_receiver= request.user)
    except Offre.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    offre.accept_offre()
    email_subject = 'Offre notification'
    to_email = offre.offre_owner
    current_site = get_current_site(request).domain
    relativeLink = reverse('retrieve',kwargs={'pk': id})
    absurl = 'http://'+current_site+relativeLink
    email_body = "Votre offre a été accepté \n" + absurl
    data = {'email_body': email_body, 'to_email': to_email,
                    'email_subject': email_subject}

    Util.send_email(data)
    return Response(status = status.HTTP_200_OK)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def refuse_offre(request, id):

    try :
        offre = Offre.objects.get(id = id , offre_receiver= request.user)
    except Offre.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)

    offre.refuse_offre()
    email_subject = 'Offre notification'
    to_email = offre.offre_owner
    current_site = get_current_site(request).domain
    relativeLink = reverse('retrieve',kwargs={'pk': id})
    absurl = 'http://'+current_site+relativeLink
    email_body = "Votre offre a été refusé \n" + absurl
    data = {'email_body': email_body, 'to_email': to_email,
                    'email_subject': email_subject}

    Util.send_email(data)
    return Response(status = status.HTTP_200_OK)



    