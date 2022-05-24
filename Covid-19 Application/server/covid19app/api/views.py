from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import CitizensInfo
from .serializers import CitizenSerializer

# Get all data from the Database
@api_view(['GET'])
def getData(request):
    citizens = CitizensInfo.objects.all()
    serializer = CitizenSerializer(citizens, many=True)
    return Response(serializer.data)

# Add new data to the Database
@api_view(['POST'])
def addData(request):
    print(request.data)
    serializer = CitizenSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# Get data by city
@api_view(['POST'])
def selectDataByCity(request):
    print(request.data)
    citizens = CitizensInfo.objects.filter(city=request.data['city'])
    serializer = CitizenSerializer(citizens,many=True)
    return Response(serializer.data)

# Get data by date
@api_view(['POST'])
def selectDataByDate(request):
    citizens = CitizensInfo.objects.raw('SELECT * FROM base_citizensinfo WHERE "birthDate" between %s AND %s', [request.data['from'], request.data['to']])
    serializer = CitizenSerializer(citizens,many=True)
    return Response(serializer.data)

