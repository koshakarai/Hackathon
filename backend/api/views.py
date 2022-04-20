from rest_framework.decorators import api_view
from rest_framework.response import (
    Response,
)
from rest_framework import status
from .models import (
    Users,
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
    print(users.id)
    print(users.surname)
    print(users.email)
    print(users)
    if not users:
        return Response('Невереный email или пароль!', status=status.HTTP_404_NOT_FOUND)
    return Response('Успех!', status=status.HTTP_200_OK)


@api_view(['POST'])
def add_order(request):
    user = Users.objects.get(id=request.data['id'])
    user.order = request.data['order']
    user.save()
    






