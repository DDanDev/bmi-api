
## Description

Responds with your BMI (Body Mass Index).

A simple API for my first time creating a backend service using [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Request

Weight in kg, height in meters.

```http
Get: http://localhost:3000/<weight>/<height>

#example
Get: http://localhost:3000/80/1.80
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
