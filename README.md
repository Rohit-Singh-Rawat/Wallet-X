# WalletX 👝💸

Welcome to the Wallet X project! This sleek wallet application is your go-to solution for managing finances effortlessly. Built on the powerful MERN (MongoDB, Express.js, React.js, Node.js) stack, it offers a seamless user experience and robust functionality.

![image](https://github.com/Rohit-Singh-Rawat/Wallet-App/assets/117940279/aee401d8-e708-4a15-afc8-67500697a857)

## Deployed 🌐

Access Wallet X now: [https://walletx-blue.vercel.app](https://walletx-blue.vercel.app)

## Features ✨

* **CRUD Operations:** Manage transactions with ease - Create, Read, Update, and Delete functionalities at your fingertips.
* **Money Transfer:** Transfer dummy funds seamlessly to other users.
* **Transaction History:** Keep track of all financial activities conveniently.
* **User Search:** Quickly find users within the app for seamless interactions.
* **Settings:** Personalize your experience with customizable settings.

## Tech Stack 🛠️

Wallet X leverages the following cutting-edge technologies:


* MongoDB: 📊 A flexible, document-based open-source database.
* Express.js: 🚀 A robust web application framework for Node.js.
* React.js: ⚛️ A powerful JavaScript library for building dynamic user interfaces.
* Node.js: 🟢 A versatile JavaScript runtime built on Chrome's V8 engine.

Additional technologies and tools:

* JWT (JSON Web Tokens): 🔐 Ensures secure user authentication.
* Vite: 🌀 A lightning-fast frontend build tool.
* Vercel: 🌐 Top-notch frontend hosting.
* Render: 🔄 Reliable backend hosting.

## Getting Started 🚀

Follow these simple steps to set up Wallet X on your local machine:

### Prerequisites 📋

* Node.js and npm installed on your machine.
* MongoDB installed and running locally or accessible remotely.
* Git

### Step 1: Installation 🛠️

1. **Clone the repository:**

```sh
git clone https://github.com/Rohit-Singh-Rawat/Wallet-App.git
```

**Backend Setup**

Navigate to the backend directory:

```sh
cd backend
```

Install dependencies:

```sh
npm install
```

Create a `.env` file and add the following:

```
DATABASE_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

Start the backend server:

```sh
node index.js
```

**Frontend Setup**

Navigate to the frontend directory:

```sh
cd ../frontend
```

Install dependencies:

```sh
npm install
```

Create a `.env` file and add:

```
VITE_API_BASE_URL=http://localhost:3000
```

Start the frontend development server:

```sh
npm run dev
```

### Step 2: Accessing the App 🖥️

With both backend and frontend running, your app should open automatically in your default web browser. If not, navigate to http://localhost:3000.

### Step 3: Making Changes 🛠️

As you make changes, the development server will automatically rebuild the affected parts and refresh the browser.

**Note:**

- Ensure your MongoDB instance is running.
- The `.env` file should contain all necessary environment variables.

## Further Help ℹ️

For more information on development practices and setting up your environment, refer to the documentation of the tools and technologies used.

Get started with Wallet X today and take control of your finances like never before! 🚀💰
