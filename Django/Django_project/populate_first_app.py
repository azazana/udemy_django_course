import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
import django

django.setup()

import random
from first_app.models import Topic, Webpage, AccessRecord
from faker import Faker

fakegen = Faker()
topics = ['Search', 'Social', 'Marketplace', 'News', 'Games', ]


def add_topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t


def populate(N=5):
    for entry in range(N):
        top = add_topic()
        # Fake data
        fake_url = fakegen.url()
        fake_data = fakegen.date()
        fake_name = fakegen.company()
        # fake web page
        webpg = Webpage.objects.get_or_create(topic=top, url=fake_url, name=fake_name,)[0]
        webpg.save()

        acc_rec = AccessRecord.objects.get_or_create(name=webpg, date=fake_data)[0]
        acc_rec.save()


if __name__ == '__main__':
    print('Start')
    populate(1000)
    print('Finish')
