# 🎥 [Watch Demo Video](https://drive.google.com/file/d/1SBjwg483nWBqEYTnFJpmq89JLH_hzM2W/view?usp=drive_link)

# 🎓 Student Dashboard – Full Stack App (React + Node.js + MongoDB)

This project is a full-stack web application that displays student quizzes and announcements for the current semester. It includes login/logout functionality, a protected dashboard, and dynamic data retrieved from the backend.

The frontend is built with **React (TypeScript + Redux Toolkit + Material UI)**, and the backend is built with **Express.js + MongoDB**.  

All source code was written by me, and Claude AI was used only to assist with:

* Setting up i18n
* Creating the requireAuth HOC
* TypeScript refinements in some utilities

🕒 **Time Spent:** Around 12–14 hours (due to work schedule and commitemnts)

---

### 🧠 Main Features
- Login/Logout system with localStorage  
- Protected routes using a Higher Order Component (requireAuth)  
- Responsive UI using Material UI  
- Dynamic quizzes and announcements from MongoDB  
- State management using Redux Toolkit  
- Ready for future translations (i18n)  
- Clean and reusable components  
- Full CRUD functionality in the backend  

---

### 🧩 Technologies Used
**Frontend:** React, TypeScript, Redux Toolkit, Material UI, React Router, react-i18next  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, dotenv, cors  
**Others:** Git, GitHub, VS Code, npm

---

### 🌐 Environment Variables
Create a `.env` file inside the **server** folder with the following:

In `server/.env`, add:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/quiz


---

## 🚀 Local Setup

1. Clone repository  
```bash
git clone https://github.com/yourusername/student-dashboard.git
cd student-dashboard



2- Install dependencies

cd client
npm install
cd ../server
npm install


start Backend     ======> nodemon index.js
start FrontEnd     ======> npm run dev Open browser at http://localhost:5173



