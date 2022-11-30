## Clone repository
```bash
git clone https://github.com/gaganshera/app_security_nodejs.git
cd app_security_nodejs
```

## Prerequitites for running the app
- Nodejs >= 14
- npm (bundles with nodejs)

## Installation

```bash
$ npm install
```

## Configuration

```bash
# Rename `development.env` file to `.env`
$ mv development.env .env
```

## Running the app

```bash
$ npm run start

# localhost:3000 => Hello World!
```

## APIs

- Register User
```
curl --location --request POST 'http://localhost:3000/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "some_user",
  "password": "P@$$w0rDss"
}'
```

- Login User
```
curl --location --request POST 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "some_user",
  "password": "P@$$w0rDss"
}'
```

- Access user profile (only logged in user)
```
# Use access_token received in the login response
curl --location --request GET 'http://localhost:3000/profile' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbWVfdXNlciIsImlhdCI6MTY2OTY4NTI2MCwiZXhwIjoxNjY5Njg1MzIwfQ.00HGSnZXkP8lo2O0NGVfLzZXQZaCqxg2Q1W82MUs35k'
```
