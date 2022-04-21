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
    user = Users.objects.get(id=request.data['user_id'])
    tr = Transaction(
        title=request.data['title'],
        amount=request.data['amount'],
        exp_data=request.data['exp_data'],
        req_price=request.data['req_price'],
        currency=request.data['currency'],
        red_line=request.data['red_line'],
        user=user,
    )

    tr.save()

    return Response('Заказ на закупку успешно создан', status=status.HTTP_200_OK)


@api_view(['GET'])
def get_by_order_id(request):
    tr = Transaction.objects.get(id=request.data['order_id'])

    return Response(model_to_dict(tr))


@api_view(['GET'])
def get_orders_by_user(request, user_id):
    orders = Transaction.objects.filter(user_id=user_id)

    return Response({'orders': [model_to_dict(i) for i in orders]}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_orders(request):
    all_order = Transaction.objects.all()

    return Response({'orders': [model_to_dict(i) for i in all_order]})


@api_view(['DELETE'])
def delete_order(request, pk):
    order = Transaction.objects.get(id=pk)
    order.delete()

    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
def get_info(request):
    all_user = Users.object.filter(user_id=user_id)

    return Response({'users': [model_to_dict(i) for i in all_user]})


@api_view(['POST'])
def add_accept(request):
    user = Users.objects.get(user_id=request['id'])
    accept_orders=request.data['transaction_id']
    user.save()

    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
def get_accept(request, user_id):
    accept = Users.objects.get(user_id=user_id)

    return Response({'accept': [model_to_dict(i) for i in accept]}, status=status.HTTP_200_OK)
