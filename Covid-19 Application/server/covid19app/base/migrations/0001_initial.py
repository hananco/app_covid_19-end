# Generated by Django 4.0.3 on 2022-05-15 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CitizensData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('birthDate', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=40)),
                ('zipcode', models.IntegerField(null=True)),
                ('landLine', models.IntegerField()),
                ('cellularPhone', models.IntegerField()),
                ('isInfected', models.BooleanField(default=False)),
                ('other', models.TextField(max_length=40)),
            ],
        ),
    ]
