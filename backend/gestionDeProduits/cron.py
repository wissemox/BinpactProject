
from .models import Produit
from datetime import date


def delete_unpublished_job():
    # your functionality goes here
    now = date.today()
    unpublished_produits = Produit.objects.filter(deadline_unpublished__lt = now, status = 'unpublished')
    unpublished_produits.delete() 