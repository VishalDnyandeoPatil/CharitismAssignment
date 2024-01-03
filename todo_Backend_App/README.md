# Charitism TODO APP

A simple Todo app made with Node.js, Express, MongoDB, and Mongoose.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization (signup and login)
- MVC (Model-View-Controller) structure
- Node.js and Express.js for backend
- MongoDB for data storage
- CRUD operations for Todos (Create, Read, Update, Delete)


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VishalDnyandeoPatil/CharitismAssignment.git
   

## Install Dependancy
- npm install

## Deploy Link
- Visit https://vast-gold-gharial-vest.cyclic.app/
## Usage
- Visit https://vast-gold-gharial-vest.cyclic.app/users/signup to create a new user.
- Visit https://vast-gold-gharial-vest.cyclic.app/users/login to log in.
- Once logged in, you can access the Todo app at https://vast-gold-gharial-vest.cyclic.app/todos.

 ## API Routes
The following API routes are available:
 - GET todos/ - Get all todos for the logged-in user.
 - GET todos/:id - Get details of a specific todo for the logged-in Admin and Super Admin.
 - POST todos/add - Add a new todo.
 <!-- - GET /todo/:id - Get details of a specific todo. -->
 - PATCH todos/:id - Update the details of a specific todo.
 - DELETE todos/:id - Delete a specific todo.

 ### `POST /signup`

For signup.

#### Request

- **Endpoint:** `/signup`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "name":"ABC",
	"email":"abc@ABCCorp",
	"password":"abc123",
    "role":"Super Admin"
  }
  

For Login

#### Request

- **Endpoint:** `/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    
	"email":"abc@ABCCorp",
	"password":"abc123"
  }
 
 ### Authentication
  - Pass the generated token to headers
  - After the token expired pass the refresh token
 

 ### `POST /todos`

Create a new todo.

#### Request

- **Endpoint:** `todos/add`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "title":" Todo 1",
    "description":" Start Todo1",
    "priority":"High" ,
    "dueDate":"02/01/2024" ,
    "isCompleted": false 
  }

### `GET todos/`

Get all new todos.

#### Request

- **Endpoint:** `todos/`
- **Method:** `GET`


### `DELETE todos/`

Delete todo.

#### Request

- **Endpoint:** `todos/:Id`
- **Method:** `DELETE`


 ### `POST todos/`

Update todo.

#### Request

- **Endpoint:** `todos/:id`
- **Method:** `PATCH`

 ### `POST /todos`
