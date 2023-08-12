# Task Manager RESTFul API

The Task Manager RESTFul API is a project designed to provide a comprehensive backend solution for managing tasks. It offers a range of features including user authentication, security, task creation, sorting, pagination, filtering, and even the ability to upload avatars for users. This README file will guide you through the project's setup and highlight its main features.

## Packages Used
The project utilizes the following packages as its dependencies:

- `bcryptjs`: For password hashing and comparison.
- `express`: A web application framework for handling API routes.
- `jsonwebtoken`: For creating and verifying JSON Web Tokens (JWT) for user authentication.
- `mongodb`: The MongoDB driver for Node.js to interact with the database.
- `mongoose`: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- `multer`: Middleware for handling file uploads, used for avatar uploads.
- `nodemailer`: A module for sending emails, which can be used for various notifications.
- `sharp`: A high-performance image processing library for resizing and modifying images.
- `validator`: A library for data validation, used to validate user inputs.

## Features

- **Sending Emails:** The API supports sending emails, including welcome and account deleting email.
- **Authentication and Security:** User authentication is implemented using JWT, ensuring secure access to endpoints.
- **Sorting, Pagination, and Filtering:** Users can sort, paginate, and filter tasks.
- **Avatar Upload:** Users can upload and manage their profile pictures.

## API Endpoints

### Users

- `POST /users` (Public): Sign up.
- `POST /users/login` (Public): Login.
- `GET /users/me` (Private): Get user's profile.
- `PATCH /users/me` (Private): Update user's profile.
- `POST /users/me/avatar` (Private): Upload profile picture.
- `GET /users/userID/avatar` (Private): View profile picture.
- `DELETE /users/me/avatar` (Private): Delete profile picture.
- `DELETE /users/me` (Private): Delete user account.
- `POST /users/logout` (Private): Logout current account.
- `POST /users/logoutall` (Private): Logout all accounts.

### Tasks

- `POST /users/tasks` (Private): Create a new task.
- `GET /users/tasks/taskID` (Private): View a specific task.
- `GET /users/tasks` (Private): View all tasks.
- `GET /users/tasks?limit=2` (Private): Limit results to 2 tasks.
- `GET /users/tasks?sortBy=createdAt:desc` (Private): Sort tasks by descending creation date.
- `GET /users/tasks?sortBy=createdAt:asc` (Private): Sort tasks by ascending creation date.
- `GET /users/tasks?skip=3` (Private): Paginate results.
- `PATCH /users/tasks/taskID` (Private): Update a task.
- `DELETE /users/tasks/taskID` (Private): Delete a task.

## Getting Started

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Set up your MongoDB database and update the connection details in the code.
4. Set environment variables for JWT secret, email configurations, etc.

## Usage

Once the application is running, you can interact with the API using tools like Postman, curl, or any other API client.

## Contributing

Contributions are welcome! Please feel free to open issues and submit pull requests.
