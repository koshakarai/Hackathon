# Generated by Django 4.0.4 on 2022-04-19 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('surname', models.CharField(max_length=255)),
                ('patronymic', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=319)),
                ('company_name', models.TextField()),
                ('inn', models.BigIntegerField()),
                ('password', models.TextField()),
                ('type', models.CharField(max_length=10)),
            ],
        ),
    ]
