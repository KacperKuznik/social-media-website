# Generated by Django 4.0.4 on 2022-07-18 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='name',
            field=models.CharField(default='', max_length=25),
        ),
    ]
