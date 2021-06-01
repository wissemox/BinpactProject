# Generated by Django 3.1.11 on 2021-05-27 12:15

from django.db import migrations, models
import django_better_admin_arrayfield.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('gestionDeProduits', '0005_auto_20210526_1513'),
    ]

    operations = [
        migrations.RenameField(
            model_name='caracteristique',
            old_name='champs_multiple',
            new_name='select_champs_multiple_choices',
        ),
        migrations.RemoveField(
            model_name='caracteristique',
            name='date',
        ),
        migrations.RemoveField(
            model_name='caracteristique',
            name='select',
        ),
        migrations.RemoveField(
            model_name='caracteristique',
            name='texte',
        ),
        migrations.RemoveField(
            model_name='caracteristiqueproduit',
            name='valeur',
        ),
        migrations.AddField(
            model_name='caracteristiqueproduit',
            name='champs_multiple_valeur',
            field=django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None),
        ),
        migrations.AddField(
            model_name='caracteristiqueproduit',
            name='date_valeur',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='caracteristiqueproduit',
            name='select_valeur',
            field=django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None),
        ),
        migrations.AddField(
            model_name='caracteristiqueproduit',
            name='texte_valeur',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
