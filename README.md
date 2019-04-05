# Near-Earth-Object-Web-Service
Nodejs API that accesses nasa.api.org to find closes asteroids to earth in the past 3 days.
Can be used as node-experess Restful API boilerplate



## How to start the server

1. Run mongodb locally using `mongod`
2. make sure the ip & port number for mongo are configured correctly in .env
3. `npm install`
4. `npm start`


## Available Endpoints

route /
returns {"hello":"world!"}

route /neo/hazardous
display all DB entries which contain potentially hazardous asteroids

route /neo/fastest?hazardous=(true|false)
returns the model of the fastest ateroid

Create a route /neo/best-year?hazardous=(true|false)
returns a year with most asteroids

Create a route /neo/best-month?hazardous=(true|false)
returns a month with most ateroids (not a month in a year)
