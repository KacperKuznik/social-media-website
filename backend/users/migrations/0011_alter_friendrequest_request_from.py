# Generated by Django 4.0.4 on 2022-05-11 22:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_rename_notificaiton_from_notification_notification_from'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friendrequest',
            name='request_from',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friend_requests', to=settings.AUTH_USER_MODEL),
        ),
    ]
