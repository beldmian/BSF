import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import json

f = open('./python/bombs.txt', 'a')

URL_TEMPLATE = "http://moscow.wikimapia.org/tag/44690/"
r = requests.get(URL_TEMPLATE)
print(r.status_code)

soup = bs(r.text, "html.parser")
vacancies_names = soup.find_all('ul', class_='two-columns clearfix')
print(len(vacancies_names))
m = []
for li in vacancies_names[0]:
    # li.text
    a = li.text.split(' - ')
    if a == ['\n'] or len(a) < 2:
        continue
    address, title = a
    address = address[1:-1:1]
    title = title[0:-1:1]
    

f.close()