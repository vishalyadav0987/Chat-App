# MERN Stack Chat-App

This is a social media application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to create, read, update, and delete posts, follow other users, like posts, and comment on posts.

## Features

- User Authentication (Signup, Login, Logout)
- Create, Read, Update, and Delete (CRUD) operations for posts
- Responsive design
- Dark and Light mode
- Message functionality (one to one)

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js
- MongoDB

---

### Installation

1. **Clone the repository**

    ``` bash
    git clone https://github.com/vishalyadav0987/Chat-App.git
    cd Food_App
    ```

2. **Install backend dependencies**:
    ``` bash
    cd ..
    npm install
    ```
3. **Install frontend dependencies**:
    ```bash
    cd frontend
    npm install
    ```
4. **Start the development servers**:
    - Backend server:
      ```bash
      cd ../backend
      nodemon index.js
      ```
    - Frontend server:
      ```bash
      cd ../frontend
      npm start
      ```
---

## Set up environment variables

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- PORT=5000


## Aplication online

- **Chat-App**: <a href="https://chat-app-yad.onrender.com" _blank >Click here Live Application.</a>



## Deployment
This application is deployed on Render. To deploy your own version:

1. Create a new web service on Render and connect your GitHub repository.
2. Add the necessary environment variables in the Render dashboard.
3. Deploy the application.

## Acknowledgements
- MongoDB
- Express.js
- React
- Node.js
- Render

## Contact
If you have any questions or suggestions, feel free to open an issue or contact me at viahalyadav0987@gmail.com.
