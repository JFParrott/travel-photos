# Travel Photos BE

## About

This is an API that serves up data from a PostgreSQL database. There are two endpoints which I have created in order to provide information on:

- locations that I have visited
- photos from these locations (each returned item contains a URL that points to an individual photo that is stored in AWS S3 Buckets)

The API itself was built using Node.js and Express. Node-postgres was used for interfacing with the database.
Jest and Supertest were used to do all testing.

The hosted API can be accessed here:
https://travel-photos-jp.herokuapp.com/api

The link above will provide you with a list of available endpoints and methods.

## Requirements

Node.js is required in order to run this project.

## Getting started

In order to get this project up and running follow the commands below.

```
$ npm i
```

This will install the dependencies required to make the app function.

```
$ npm start
```

This will start the app and will begin to listen out for requests on a default port of 9090.
