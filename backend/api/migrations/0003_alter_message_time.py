# Generated by Django 4.0.3 on 2022-04-03 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_user_avatar_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
