# Generated by Django 3.1.12 on 2021-06-07 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestionDeProduits', '0011_produit_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='deadline_unpublished',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
