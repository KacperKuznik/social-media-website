# Generated by Django 4.0.4 on 2022-05-03 17:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_post_message'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='message',
            new_name='text',
        ),
    ]
