from rest_framework.decorators import api_view
from rest_framework.response import (
    Response,
)
from rest_framework import status
from django.forms.models import model_to_dict
from .models import (
    Users, Transaction,
)

from .serializer import *


@api_view(['POST'])
def create_user(request):
    users = Users.objects.filter(email=request.data['email'])
    if users:
        return Response('Такой email уже используется.', status=status.HTTP_400_BAD_REQUEST)

    user = Users(
        name=request.data['name'],
        surname=request.data['surname'],
        patronymic=request.data['patronymic'],
        email=request.data['email'],
        company_name=request.data['company_name'],
        inn=request.data['inn'],
        password=request.data['password'],
        type=request.data['type']
    )

    user.save()
    return Response('Регистрация успешно завершена!', status=status.HTTP_200_OK)


@api_view(['POST'])
def auth_user(request):
    users = Users.objects.get(email=request.data['email'], password=request.data['password'], type=request.data['type'])
    data = {"id": f"{users.id}"}

    if not users:
        return Response('Невереный email или пароль!', status=status.HTTP_404_NOT_FOUND)
    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
def add_order(request):
    tr = Transaction(
        title=request.data['title'],
        amount=request.data['amount'],
        exp_data=request.data['exp_data'],
        req_price=request.data['req_price'],
        currency=request.data['currency'],
        red_line=request.data['red_line'],
        user=request.data['user_id'],
    )

    tr.save()

    return Response('Заказ на закупку успешно создан', status=status.HTTP_200_OK)


@api_view(['POST'])
def get_order_id(request):
    id_user = Transaction.objects.get(user_id=request.data['user_id'])

    return Response(model_to_dict(id_user))


@api_view(['GET'])
def get_orders(request):
    all_order = Transaction.objects.all()

    return Response(model_to_dict(all_order))


@api_view(['DELETE'])
def delete_order(request):
    pass
