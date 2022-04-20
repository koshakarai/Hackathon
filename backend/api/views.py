from rest_framework.decorators import api_view
from rest_framework.response import (
    Response,
)
from rest_framework import status
from .models import (
    Users, Transaction,
)

from .serializer import *


@api_view(['GET', 'POST'])
def test_api(request):
    """
    The test api
 """
    if request.method == 'GET':
        data = [{"id": 0, "name": "Akay"},
                {"id": 1, "name": "Ararat"},
                {"id": 2, "name": "Maxim"},
                {"id": 3, "name": "Roman"}]

        return Response(data)

    elif request.method == 'POST':
        return Response({"hi": "hi"})


@api_view(['POST'])
def create_user(request):
    print(request.data)
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
        password=request.data['password']
    )

    user.save()
    return Response('Регистрация успешно завершена!', status=status.HTTP_200_OK)


@api_view(['POST'])
def auth_user(request):
    users = Users.objects.get(email=request.data['email'], password=request.data['password'])
    data = {"id": f"{users.id}"}

    if not users:
        return Response('Невереный email или пароль!', status=status.HTTP_404_NOT_FOUND)
    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
def add_order(request):

    tr = Transaction(
                     title=request.data['title'],
                     amount=request.data['amount'],
                     create_data=request.data['create_data'],
                     exp_data=request.data['exp_data'],
                     req_price=request.data['req_price'],
                     currency=request.data['currency']
                     )

    tr.save()

    return Response('Заказ на закупку успешно создан', status=status.HTTP_200_OK)


@api_view(['POST'])
def get_order_id(request):
    id_user = Transaction.objects.get(user_id=request.data['user_id'])

    return Response(id_user.dict())


@api_view(['GET'])
def get_orders(request):
    pass


@api_view(['DELETE'])
def delete_order(request):
    pass

