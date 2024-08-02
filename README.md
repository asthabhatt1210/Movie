# Movie Management System

## Project Setup

### Prerequisites

- Node.js installed
- MongoDB installed

### Step 1: Initialize the Project

1. Open Visual Studio Code and start a new terminal.

2. Initialize the project:

    ```bash
    npm init -y
    ```

3. Install dependencies:

    ```bash
    npm install express dotenv mongoose body-parser bcrypt jsonwebtoken
    npm install --save-dev nodemon
    ```

4. Manually create a `.env` file in the root directory of your project and add the following:

    ```env
    JWT_SECRET=your_jwt_secret
    MONGODB_URI=mongodb://localhost:27017/movie
    ```

5. Run the server:

    ```bash
    node index.js
    ```


