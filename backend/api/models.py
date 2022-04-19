from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255)
    email = models.CharField(max_length=319)
    company_name = models.TextField()
    inn = models.BigIntegerField()
    password = models.TextField()

    def __str__(self):
        return self.name
