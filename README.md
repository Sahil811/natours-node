# Natours - Node.js API

This is the Node.js/Express API for the Natours application. Natours is a tour booking and reviews website. 

## Features

- RESTful API with Node.js and Express
- MongoDB and Mongoose for data modeling and querying
- Authentication and authorization with JWT
- File upload and storage with Multer and GridFS
- Email sending with Nodemailer
- Payment processing with Stripe
- API documentation with Swagger

## Usage

### Install

```
npm install
```

### Configure

Copy `.env.example` to `.env` and update configuration values 

### Run Locally

```
npm run dev
```

Server will be running on http://localhost:3000

## API Endpoints

Documented OpenAPI spec is available in `apiDocs.json` or when running the server at `/api-docs`

### Users

- POST /signup - Register a new user
- POST /login - Login and receive a JWT
- GET /users/me - Get current user profile
- PATCH /updateMe - Update current user profile
- GET /users/:id - Get user profile by ID

### Tours

- GET /tours - List all tours
- GET /tours/:id - Get single tour 
- POST /tours - Create new tour
- PATCH /tours/:id - Update tour
- DELETE /tours/:id - Delete tour

And more...

## License

This project is open source and available under the [MIT License](LICENSE).
