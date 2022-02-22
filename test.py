import requests
import urllib.parse
import codecs
import json

fileObj = codecs.open( "bombs.txt", "r", "utf_8_sig" )
lines = fileObj.readlines()

out = []
for line in lines:
    mos = 'Москва, '
    address = mos+line 
    url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'

    response = requests.get(url).json()
    if len(response) > 0:
        out.append([response[0]["lat"], response[0]["lon"]])
        print(response[0]["lat"], response[0]["lon"])
print(out)
with open('bombs.json', 'w') as f:
    json.dump(out, f)