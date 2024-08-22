# Stock Market Application

A full-stack stock market application built using the MERN stack (MongoDB, Express.js, React, Node.js), with SQLite as the database for storing stock data. This application fetches real-time stock prices from Alpha Vantage and provides real-time updates to users via WebSockets.

## Features

- **Real-Time Stock Data:** Fetches and displays real-time stock prices using Alpha Vantage API.
- **Interactive Charts:** Displays stock charts using TradingView widgets.
- **Real-Time Updates:** Uses Socket.io for real-time updates of stock prices.
- **User Authentication:** (If implemented) Allows users to log in using OAuth with Google.
- **Responsive Design:** Ensures a seamless experience across various devices.

## Technologies Used

- **Frontend:** React, TradingView Widgets
- **Backend:** Node.js, Express.js, Socket.io
- **Database:** SQLite
- **API:** Alpha Vantage
- **Authentication:** OAuth (Google)

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- SQLite database setup.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies

#### Frontend

Navigate to the `client` directory and install the required dependencies:

````bash
cd client
npm install

### 3. Set Up Environment Variables

Create a `.env` file in the `server` directory with the following content:

```env
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key

### 4. Run the Application

#### Start the Backend Server

Navigate to the `server` directory and start the backend server:

```bash
cd server
npm start


# Getting Started with Create React App


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
````
