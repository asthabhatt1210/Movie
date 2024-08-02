# Movie Management System

## Project Setup

### Prerequisites

- Node.js installed
- MongoDB installed

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
    
6. Git Comments:
   
   ```bash
   git init
   git remote add origin https://github.com/asthabhatt1210/Movie.git
   git fetch origin
   git checkout main
   git rebase origin/main
   git add .
   git rebase --continue
   git push origin main --force
   git commit -m "user:create,update,delete and sdisplay"
   git push origin main
   ```

7. Postman setup:

   ```bash
   git add Movie_postman_collection.json
   git commit -m "Adding the postman collection"
   git push origin main
   ```

8. Mongodb
   ```bash
   cd "C:\Program Files\MongoDB\Server\7.0\bin"  
   .\mongodump --db movie --out C:\Users\hp\Desktop\Movie\Mongodb_collection
   ``` 

   


