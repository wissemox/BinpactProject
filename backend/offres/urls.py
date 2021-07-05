from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.ApiOffreCreateView.as_view()),
    path('list/', views.ApiOffreListView.as_view()),
    path('retrieve/<int:pk>', views.ApiOffreRetrieveView.as_view(), name="retrieve"),
    path('accept/<int:id>', views.accept_offre),
    path('refuse/<int:id>', views.refuse_offre),
]