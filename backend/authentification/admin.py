from django.contrib import admin
from .models import Communaute, User
# Register your models here.
from .utils import Util
from django.contrib.admin.helpers import ActionForm
from django import forms
from datetime import datetime
from datetime import timedelta, date

BAN_TIME_CHOICES = (
    ('1','1 DAY'),
    ('3','3 DAYS'),
    ('7','1 WEEK'),
    ('14','2 WEEKS'),
    ('30','1 MONTH'),
    
)


class CommunauteAdmin(admin.ModelAdmin):
    #model = Categorie
    fields = ('secteur_activite', 'nom', 'domaine', 'logo', 'siret', 'pays', 'ville', 'adresse', 'code_postal', 'user', 'communaute')
    list_display = [field.name for field in Communaute._meta.get_fields()]
class BanActionForm(ActionForm):
    ban_reason = forms.CharField(required=False, widget = forms.Textarea)
    ban_duration = forms.ChoiceField(required=False, choices = BAN_TIME_CHOICES)


class UserAdmin(admin.ModelAdmin):

    #model  = User
    list_display = ('nom', 'prenom', 'username', 'email', 'tel', 'pays', 'ville', 'adresse', 'code_postal', 
    'is_verified', 'is_active', 'is_staff', 'is_banned', 'end_time_ban', 'date_creation', 'date_modification', 'role', 'sexe', 'date_naissance',
    'profile_pourcentage')

    actions = ['ban_user', 'unban_user']
    action_form = BanActionForm
    def ban_user(self, request, queryset):
        ban_reason = request.POST['ban_reason']
        ban_duration = request.POST['ban_duration']
        queryset.update(is_banned = True)
        end_time_ban =  date.today() + timedelta(days=int(ban_duration)) 
        queryset.update(end_time_ban = end_time_ban)
        subject = 'Ban'
        message = 'You have been banned for ' + ban_duration +  ' days because ' +  ban_reason
        for email in queryset:
            data = {'email_body': message, 'to_email': email,
                    'email_subject': subject}
            Util.send_email( data)
        
    def unban_user(self, request, queryset):
        queryset.update(is_banned = False)
        

admin.site.register(Communaute, CommunauteAdmin)
admin.site.register(User, UserAdmin)



