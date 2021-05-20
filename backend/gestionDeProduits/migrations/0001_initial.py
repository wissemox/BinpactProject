# Generated by Django 3.1.10 on 2021-05-18 13:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categorie', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='SousCategorie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sous_categorie', models.CharField(max_length=50)),
                ('categorie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gestionDeProduits.categorie')),
            ],
        ),
        migrations.CreateModel(
            name='Produit',
            fields=[
                ('deleted', models.DateTimeField(editable=False, null=True)),
                ('produit_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=50)),
                ('prix_en_euros', models.IntegerField()),
                ('prix_en_bins', models.IntegerField()),
                ('marque', models.CharField(max_length=50)),
                ('modele', models.CharField(max_length=50)),
                ('version', models.CharField(max_length=50)),
                ('critere', models.CharField(choices=[('A+', 'A+'), ('A', 'A'), ('B+', 'B+'), ('B', 'B')], max_length=2)),
                ('fonctionnel', models.CharField(choices=[('No', 'No'), ('Yes', 'Yes')], max_length=3)),
                ('description', models.CharField(max_length=300)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('slug', models.SlugField(max_length=250, unique=True)),
                ('categorie', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='gestionDeProduits.categorie')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('sous_categorie', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='gestionDeProduits.souscategorie')),
            ],
            options={
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted', models.DateTimeField(editable=False, null=True)),
                ('image', models.ImageField(upload_to='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('produit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='gestionDeProduits.produit')),
            ],
            options={
                'managed': True,
            },
        ),
    ]
