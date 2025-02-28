# URL Shortener Project

A Node.js URL Shortener application built with Express and EJS that allows users to generate, track, and manage shortened URLs. The project uses JWT for authentication (with tokens passed via cookies), and provides both user and admin interfaces.

## Features

- **User Authentication**
  - JWT for token generation.
  - Tokens passed via cookies for secure authentication.
- **User Interface**
  - Login and Sign Up pages.
  - Home page where users can paste a URL and generate a shortened version.
- **URL Management**
  - Each user's shortened URLs are stored in the database.
  - Visit count is tracked each time a shortened URL is accessed.
  - Users can view the visit counts on their home page.
- **Admin Interface**
  - An admin page that lists all generated shortened URLs from all users.
  - Role-based authorization for NORMAL users and ADMIN.
  - A hard-coded admin is created during the initial project startup.
- **Environment Configuration**
  - Uses [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables.

## Technologies Used

- **Backend:** Node.js, Express
- **Templating:** EJS
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** MongoDB (via Mongoose)
- **Utilities:** cookie-parser, shortid, uuid, dotenv
- **Development:** nodemon

![image](https://github.com/user-attachments/assets/11777c54-f2f8-4b17-9b06-046616ffa080)
