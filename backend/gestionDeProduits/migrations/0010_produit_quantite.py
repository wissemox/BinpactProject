# Generated by Django 3.1.12 on 2021-06-04 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestionDeProduits', '0009_auto_20210531_1503'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='quantite',
            field=models.IntegerField(default=1),
        ),
    ]
