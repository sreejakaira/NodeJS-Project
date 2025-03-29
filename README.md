

User Management API
   Overview
This is a User Management API built with Node.js, Express, and MongoDB. It provides features to create, retrieve, update, and delete users, while ensuring manager validation and data integrity.

🚀 Features
✔ Create, update, and delete users
✔ Validate manager assignments
✔ Seamless MongoDB integration using Mongoose
✔ Error handling and middleware support

🛠 Tech Stack
🔹 Backend: Node.js, Express.js
🔹 Database: MongoDB (Mongoose ORM)
🔹 Environment Configuration: dotenv
🔹 Logging: Winston
🔹 UUID for Unique IDs

📂 Project Structure
bash
Copy
Edit
/user-management
 ├── /models
 │    ├── userModel.js
 │    ├── managerModel.js
 ├── /routes
 │    ├── userRoutes.js
 ├── /controllers
 │    ├── userController.js
 ├── /middlewares
 │    ├── errorMiddleware.js
 │    ├── validationMiddleware.js
 ├── config.js
 ├── server.js
 ├── .env
 ├── package.json
🔧 Installation & Setup
1️⃣ Prerequisites
🛠 Install Node.js
🛠 Install MongoDB


3️⃣ Install Dependencies
sh
Copy
Edit
npm install
4️⃣ Configure Environment Variables
Create a .env file in the root directory and add:

ini
Copy
Edit
MONGO_URI=*************
PORT=5000
5️⃣ Start the Server
sh
Copy
Edit
node server.js
# or use nodemon for hot reload
npm install -g nodemon
nodemon server.js
✅ Server runs on http://localhost:5000

📡 API Endpoints
1️⃣ Create User
🟢 POST /api/create_user
Request Body:

json
Copy
Edit
{
  "full_name": "John Doe",
  "mob_num": "+911234567890",
  "pan_num": "ABCDE1234F",
  "manager_id": "manager-123"
}
2️⃣ Get Users
🔵 GET /api/get_users

3️⃣ Update User
🟠 PUT /api/update_user/:user_id
Request Body:

json
Copy
Edit
{
  "full_name": "Jane Doe",
  "mob_num": "+919876543210"
}
4️⃣ Delete User
🔴 DELETE /api/delete_user/:user_id






