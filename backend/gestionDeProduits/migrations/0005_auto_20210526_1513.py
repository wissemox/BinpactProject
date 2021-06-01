# Generated by Django 3.1.10 on 2021-05-26 14:13

from django.db import migrations, models
import django.db.models.deletion
import django_better_admin_arrayfield.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('gestionDeProduits', '0004_auto_20210526_1437'),
    ]

    operations = [
        migrations.AlterField(
            model_name='caracteristique',
            name='champs_multiple',
            field=django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None),
        ),
        migrations.AlterField(
            model_name='caracteristique',
            name='select',
            field=django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None),
        ),
        migrations.AlterField(
            model_name='caracteristique',
            name='sous_categorie',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='gestionDeProduits.souscategorie'),
        ),
    ]
