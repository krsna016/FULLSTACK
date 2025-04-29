# Subscription App

## Overview
This project is a subscription management application that allows users to create, read, edit, show, and delete subscriptions. It includes user authentication features using Passport.js.

## Features
- User registration and login
- Create, read, edit, show, and delete subscriptions
- Client-side validation using Bootstrap
- Session management for user authentication

## Project Structure
```
subscription-app
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
├── views
│   ├── layouts
│   │   └── main.ejs
│   ├── subscriptions
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   ├── show.ejs
│   │   └── delete.ejs
│   ├── auth
│   │   ├── login.ejs
│   │   ├── register.ejs
│   │   └── logout.ejs
├── models
│   └── subscription.js
├── routes
│   ├── subscriptions.js
│   └── auth.js
├── app.js
├── package.json
├── .env
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd subscription-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables (e.g., database connection strings, session secrets).

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.

## Routes
- **Authentication**
  - `GET /register` - User registration page
  - `POST /register` - Register a new user
  - `GET /login` - User login page
  - `POST /login` - Authenticate user
  - `GET /logout` - Logout user

- **Subscriptions**
  - `GET /subscriptions` - List all subscriptions
  - `GET /subscriptions/new` - Create a new subscription
  - `POST /subscriptions` - Save a new subscription
  - `GET /subscriptions/:id` - Show a specific subscription
  - `GET /subscriptions/:id/edit` - Edit a subscription
  - `PUT /subscriptions/:id` - Update a subscription
  - `DELETE /subscriptions/:id` - Delete a subscription

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.