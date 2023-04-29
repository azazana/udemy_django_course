from django.db import models
from django.urls import reverse
from django.utils import timezone


class Time(models.Model):
    create_date = models.DateTimeField(default=timezone.now())


class Post(models.Model, Time):
    author = models.ForeignKey("auth.User")
    title = models.CharField(max_length=200)
    text = models.TextField()
    publeshed_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.publeshed_date = timezone.now()
        self.save()

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})

    def approve_comments(self):
        return self.comments.filter(approved_comment=True)

    def __str__(self):
        return self.title


class Comment(models.Model, Time):
    post = models.ForeignKey("blog.Post", related_name="comments")
    author = models.CharField(max_length=200)
    text = models.TextField()
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def get_absolute_url(self):
        return reverse("post_list")

    def __str__(self):
        return self.text
