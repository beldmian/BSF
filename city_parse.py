from bs4 import BeautifulSoup
import requests
import json

out = []
start = 0
while True:
    url='https://wikimapia.org/search/?q=%D0%B1%D0%BE%D0%BC%D0%B1%D0%BE%D1%83%D0%B1%D0%B5%D0%B6%D0%B8%D1%89%D0%B5'
    page = requests.post(url, data={
        "y":61227957,
        "x":81650391,
        "z":4,
        "start": start*10
    })

    soup = BeautifulSoup(page.text, "html.parser")
    allRes = soup.find_all("li", {"class": "search-result-item"})
    if len(allRes) == 0:
        break
    for res in allRes:
        urlDetail = 'https://nominatim.openstreetmap.org/reverse?lat='+res.attrs["data-latitude"]+'&lon='+res.attrs["data-longitude"]+'&format=json'
        resp = requests.get(urlDetail).json()["address"]
        addr = ""
        if  "city" in resp.keys() and "road" in resp.keys() and "house_number" in resp.keys():
            addr = resp["city"] + ", " + resp["road"] + ", " + resp["house_number"]
        elif "city" in resp.keys() and "road" in resp.keys():
            addr = resp["city"] + ", " + resp["road"]
        elif "road" in resp.keys() and "house_number" in resp.keys():
            addr = resp["road"] + ", " + resp["house_number"]
        elif "road" in resp.keys():
            addr = resp["road"]
        elif "city" in resp.keys():
            addr = resp["city"]
        print(addr)
        out.append([res.attrs["data-latitude"], res.attrs["data-longitude"], addr])
    start += 1
with open('bombs.json', 'w') as f:
    json.dump(out, f)