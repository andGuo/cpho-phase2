# Generated by Django 4.0.6 on 2023-04-20 20:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cpho', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='indicator',
            old_name='indicator',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='indicator',
            old_name='topic',
            new_name='sub_category',
        ),
        migrations.RenameField(
            model_name='indicatordata',
            old_name='country',
            new_name='location',
        ),
        migrations.RenameField(
            model_name='indicatordata',
            old_name='geography',
            new_name='location_type',
        ),
    ]
