# Generated by Django 3.1.12 on 2021-06-22 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentification', '0008_auto_20210603_1710'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='nom_communaute',
        ),
    ]
