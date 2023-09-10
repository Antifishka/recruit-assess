# Recruit assess

I am pleased to present you a web application for assessing the knowledge of developers!

## 💻 Tech Stack

**_Server:_** Node.js, Express.js, MongoDB, Mongoose, Multer, Cloudinary, Joi
**_Client:_** React, Redux Toolkit, JS, TailwindCSS, Axios, Formik, Yup.

## ✏ Introducin

"Recruit assess" is a web application with backend REST API. It is intended for recruiters and developers. You can check your knowledge with the help of a test and get a score. Authorized users can add, edit and delete questions.

## Getting Started - Backend

- To run the API locally, you'll need to have Node.js and MongoDB installed on your machine. You can then clone this repository and install its dependencies by running:

  git clone https://github.com/Antifishka/recruit-assess.git
  cd recruit-assess/backend
  npm install

- You'll also need to create a .env file in the root of the project, with the following environment variables:

  PORT=3000
  DB_HOST=<your MongoDB connection string>
  JWT_SECRET=<a secret string for JSON Web Tokens>
  CLOUDINARY_NAME=<your Cloudinary cloud name>
  CLOUDINARY_KEY=<your Cloudinary API key>
  CLOUDINARY_SECRET=<your Cloudinary API secret>

* You can then start the server with:

  npm start

This will run the server in production mode, which serves the API at http://localhost:3000.

- If you want to run the server in development mode, with automatic reloading on file changes, you can use:

  npm run start:dev

## API Documentation

🔗 Base url https://superheroes-q2df.onrender.com
