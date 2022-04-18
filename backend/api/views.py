from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import *

@api_view(['GET', 'POST'])
def test_api(request):
    """
    The test api
 """
    if request.method == 'GET':
        data = [{"id":0, "name":"Akay"},
        {"id":1, "name":"Ararat"},
        {"id":2, "name":"Maxim"},
        {"id":3, "name":"Roman"}
                ]

        return Response(data)

    elif request.method == 'POST':
        return Response({"hi":"hi"})
