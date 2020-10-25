# Travel Photos BE

## About

This is a RESTful API that serves up data from a PostgreSQL database. There are two endpoints which I have created in order to provide information on:

- locations that I have visited
- photos from these locations (each returned item contains a URL that points to an individual photo that is stored in AWS S3 Buckets)

The API itself was built using Node.js and Express. Node-postgres and Knex were used for interacting with the database.
Jest and Supertest were used to do all testing.

The hosted API can be accessed on Heroku, here:
https://travel-photos-jp.herokuapp.com/api

The link above will provide you with a list of available endpoints and methods.

## Requirements

In order to get this project up and running, you will need:

- Node Package Manager
- PostgresQL
- Node.js
- Git CLI

## Getting started

In order to get this project up and running follow the instructions below.

First we will need to fork and clone this repository.

```
$ git clone https://github.com/JFParrott/travel-photos
```

Next, cd into the directory and install the relevant packages:

```
$ cd travel-photos
$ npm i
```

We must then do the following:

```
$ npm run setup-dbs
$ npm run seed-dev
$ npm run seed-test
```

These three commands will setup the databases and seed the required data. Now we're talking!

```
$ npm start
```

This will start the app and will begin to listen out for requests on a default port of 9090.

Now head to localhost:9090/api in your browser to get available endpoints.

Enjoy!

## Testing

To run the tests for this app, enter the following command:

```
npm test
```
