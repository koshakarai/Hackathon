from rest_framework.decorators import api_view
from rest_framework.response import Response
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
    users = Users.objects.filter(email=request['email'])
    if users:
        return 'Такой email уже используется.'

    user = Users(
        name=request['name'],
        surname=request['surname'],
        patronymic=request['patronymic'],
        email=request['email'],
        company_name=request['company_name'],
        inn=request['inn'],
        password=request['password']
    )

    user.save()


@api_view(['POST'])
def auth_user(request):
    a = Users.objects.filter(email=request['email'], password=request['password'])
    if a:
        return Users
    else:
        None

