# Generated by Django 4.2 on 2023-04-20 20:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('birthdate', models.DateField()),
                ('gender', models.CharField(choices=[('G', 'Girl'), ('B', 'Boy'), ('N', 'I prefer not to say')], max_length=1)),
                ('profile_photo', models.ImageField(blank=True, null=True, upload_to='child_profiles')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='child', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]