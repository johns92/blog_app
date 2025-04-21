# Task

This application is built using the MERN (MongoDB, Express, React, Node.js) stack and comes with various functionalities to manage and share your blogs.

Currently, users are automatically signed out whenever they refresh blogs page.
Fix it so that users don't have to login again after refreshing the page.

## Existing Functionalities

- **Authentication:** Secure user authentication system to protect your blogs.
- **Create Blog:** Easily create and publish your blogs with a user-friendly interface.
- **Delete Blog:** Remove unwanted blogs with a simple delete option.
- **Update Blog:** Edit and update your blogs as your content evolves.
- **View Other User Blogs:** Explore and read blogs published by other users.

## Getting Started

To get started with this project, follow these steps:

1. Install the required dependencies for both the backend and frontend:

```bash
cd Blog-App
cd server && npm install
cd ../client && npm install
```

2. Configure the database connection in the backend. You can use MongoDB Atlas or a local MongoDB server.

3. Start the backend server:

```bash
cd server && npm start
```

4. Start the frontend application:

```bash
cd client && npm start
```


5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).