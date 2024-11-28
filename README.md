# Study Notion (MERN Stack) (Backend)

This repository contains the codebase for a fully functional EdTech platform built as a final-year project using the MERN (MongoDB, Express, React, Node.js) stack. This platform provides a role-based access system for instructors and students, enabling instructors to create and price courses and students to purchase and access them. The project includes secure authentication and integrates a payment gateway using Razorpay API.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Instructor Capabilities
- **Course Creation**: Instructors can create courses, set course prices, and upload lecture videos.
- **Content Management**: Instructors can manage their courses and lecture content.

### Student Capabilities
- **Course Enrollment**: Students can browse available courses, make purchases, and access lecture videos.
- **Course Tracking**: Students can track course progress and complete courses at their own pace.

### Security & Payment
- **Role-Based Access Control**: Different permissions for instructors and students.
- **Authentication**: JWT tokens and cookies for secure user authentication and session management.
- **Payment Gateway Integration**: Secure payment processing through Razorpay API.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS (for UI components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Razorpay API
- **Authentication**: JSON Web Tokens (JWT), Cookies
- **RESTful APIs**: For handling user requests and data transactions

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Atlas or Local)
- Razorpay API Account

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/edtech-platform.git
    cd edtech-platform
    ```

2. **Install server dependencies**:
    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies**:
    ```bash
    cd ../client
    npm install
    ```

4. **Set up MongoDB and Razorpay**: Ensure MongoDB is running and that you have a Razorpay account.

5. **Set up environment variables** (see below).

---

## Environment Variables

Create a `.env` file in the root of the `server` directory with the following keys:

```plaintext
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
```

### Testing
1. **Test the repository**:
   Use Postman to test the backend APIs of this project
    ```bash
   https://documenter.getpostman.com/view/24441701/2s93kz6REm
    ```
   Go to this link to check and test all the APIs of this RBAC implementation.
