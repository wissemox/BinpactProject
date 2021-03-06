# Generated by Django 3.1.12 on 2021-06-29 10:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('offres', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryOption',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=45)),
                ('prix', models.FloatField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Prestataire',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('adresse', models.CharField(max_length=45)),
                ('code_postal', models.CharField(max_length=45)),
                ('ville', models.CharField(max_length=45)),
                ('pays', models.CharField(max_length=45)),
                ('tel', models.CharField(max_length=45)),
                ('email', models.EmailField(max_length=254)),
                ('logo', models.CharField(max_length=45)),
                ('horaire_travail', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('compeleted', 'COMPLETED')], default='pending', max_length=45)),
                ('package_location', models.CharField(max_length=45)),
                ('delivery_option', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='delivery_option', to='transaction.deliveryoption')),
                ('deposit_option', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='deposit_option', to='transaction.deliveryoption')),
                ('offre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='offres.offre')),
            ],
        ),
        migrations.AddField(
            model_name='deliveryoption',
            name='prestataire',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transaction.prestataire'),
        ),
    ]
