# Generated by Django 4.1 on 2023-05-06 12:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_rename_publeshed_date_post_published_date_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="create_date",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 5, 6, 12, 3, 39, 188887, tzinfo=datetime.timezone.utc
                )
            ),
        ),
        migrations.AlterField(
            model_name="post",
            name="create_date",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 5, 6, 12, 3, 39, 187893, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]
