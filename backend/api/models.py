from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255)
    email = models.CharField(max_length=319)
    company_name = models.TextField()
    inn = models.BigIntegerField()
    password = models.TextField()
    type = models.CharField(max_length=10)
    accept_orders = models.TextField()

    def __str__(self):
        return Users


class Transaction(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    amount = models.IntegerField()
    create_data = models.DateTimeField(auto_now_add=True)
    exp_data = models.DateTimeField()
    req_price = models.FloatField()
    currency = models.CharField(max_length=10)
    red_line = models.BooleanField()

    def __str__(self):
        return Transaction
