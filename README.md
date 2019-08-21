# Near-Earth-Object-Web-Service

[![Greenkeeper badge](https://badges.greenkeeper.io/khaledosman/Node-Express-API-Boilerplate.svg)](https://greenkeeper.io/)
[![codebeat badge](https://codebeat.co/badges/28b23383-791d-48ed-b4a0-2197e399ea84)](https://codebeat.co/projects/github-com-khaledosman-node-express-api-boilerplate-master)

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
