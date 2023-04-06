import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Project_Two.settings')

import django

django.setup()

from ApplicationTwo.models import Users

from faker import Faker

fakegen = Faker()


def fake_users(N):
    for _ in range(N):
        user = \
            Users.objects.get_or_create(first_name=fakegen.first_name(),
                                 last_name=fakegen.last_name(), email=fakegen.email())[0]
        user.save()


if __name__ == '__main__':
    fake_users(100)
