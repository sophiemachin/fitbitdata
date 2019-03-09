# Generated by Django 2.1.7 on 2019-03-09 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Weight',
            fields=[
                ('logId', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('weight', models.FloatField()),
                ('bmi', models.FloatField()),
                ('fat', models.FloatField()),
                ('source', models.CharField(max_length=10)),
                ('created_at', models.DateTimeField()),
            ],
        ),
    ]
