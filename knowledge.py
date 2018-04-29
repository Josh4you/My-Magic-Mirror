import requests
import json
import feedparser
import datetime
from speech import Speech


class Knowledge(object):
    def __init__(self, weather_api_token, news_country_code='IN'):
        self.news_country_code = news_country_code
        self.weather_api_token = weather_api_token

    def find_weather(self):
        loc_obj = self.get_location()

        lat = loc_obj['lat']
        lon = loc_obj['lon']

        weather_req_url = "https://api.darksky.net/forecast/%s/%s,%s" % (self.weather_api_token, lat, lon) 
        print weather_req_url
        r = requests.get(weather_req_url)
        print r
        weather_json = json.loads(r.text)
        

        temperature = int(weather_json['currently']['temperature'])

        current_forecast = weather_json['currently']['summary']
        #hourly_forecast = weather_json['minutely']['summary']
        daily_forecast = weather_json['hourly']['summary']
        weekly_forecast = weather_json['daily']['summary']
        icon = weather_json['currently']['icon']
        wind_speed = int(weather_json['currently']['windSpeed'])

        return {'temperature': temperature, 'icon': icon, 'windSpeed': wind_speed, 'current_forecast': current_forecast,'daily_forecast': daily_forecast, 'weekly_forecast': weekly_forecast}

    def get_location(self):
        # get location
        lat = "%s"% self.lat()
        lon = "%s"% self.lng()
        print lat
        print lon
        return {'lat': lat, 'lon': lon}


    def lat(self):
        ip_url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCpx2tKaiqlI6p7xgpCXKhiw3NZHb0mXhI"
        req = requests.post(ip_url)
        ip_json = json.loads(req.text)
        print ip_json
        return ip_json['location']['lat']
    
    def lng(self):
        ip_url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCpx2tKaiqlI6p7xgpCXKhiw3NZHb0mXhI"
        req = requests.post(ip_url)
        ip_json = json.loads(req.text)
        print ip_json
        return ip_json['location']['lng']




    def get_ip(self):
        ip_url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCpx2tKaiqlI6p7xgpCXKhiw3NZHb0mXhI"
        req = requests.post(ip_url)
        ip_json = json.loads(req.text)
        lat=ip_json['location']['lat']
        lng=ip_json['location']['lng']
        print ip_json
        print lat 
        print lng 
        url = "https://maps.googleapis.com/maps/api/staticmap?center=%s,%s&zoom=13&marker=color:red%7Clabel:U%7C%s,%s&key=AIzaSyAp9blWvD8wxs89hTRlzo87fNldbNyjm7s" %(lat,lng)
        print url
        return str(url)
        #print url
       # speak = "You are in this location"
       #return "http://maps.googleapis.com/maps/api/staticmap?center=%s,%s&zoom=13&scale=&size=1200x600&maptype=roadmap&format=png&keyAIzaSyAp9blWvD8wxs89hTRlzo87fNldbNyjm7s" %(lat,lng) 
    #    print speak
     #   body = {'url': url}
      # if requests.post() is not None:
       #     print "request sent "
        #else:
         #   print "request not sent"
        #self.speech.synthesize_text(speak) \

    def get_map_url(self, location, map_type=None):
        if map_type == "satellite":
            return "http://maps.googleapis.com/maps/api/staticmap?center=%s&zoom=10&scale=2&size=1200x600&maptype=satellite&format=png&keyAIzaSyAp9blWvD8wxs89hTRlzo87fNldbNyjm7s" % location
        elif map_type == "terrain":
            return "http://maps.googleapis.com/maps/api/staticmap?center=%s&zoom=10&scale=2&size=1200x600&maptype=terrain&format=png&keyAIzaSyAp9blWvD8wxs89hTRlzo87fNldbNyjm7s" % location
        elif map_type == "hybrid":
            return "http://maps.googleapis.com/maps/api/staticmap?center=%s&zoom=10&scale=2&size=1200x600&maptype=hybrid&format=png&keyAIzaSyAp9blWvD8wxs89hTRlzo87fNldbNyjm7s" % location
        else:
            return "http://maps.googleapis.com/maps/api/staticmap?center=%s&zoom=10&scale=&size=1200x600&maptype=roadmap&format=png&keyAIzaSyAp9blWvD8wxs89hTRlzo87fNldbNyjm7s" % location

    def get_news(self):
        ret_headlines = []
        feed = feedparser.parse("https://news.google.com/news?ned=%s&output=rss" % self.news_country_code)

        for post in feed.entries[0:5]:
            ret_headlines.append(post.title)

        return ret_headlines

    def get_holidays(self):
        today = datetime.datetime.now()
        r = requests.get("http://kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForYear&year=%s&country=usa" % today.year)
        holidays = json.loads(r.text)

        return holidays

