# DevTrack

DevTrack is a lightweight full-stack web application designed to help developers manage their personal projects, tasks, and development workflows in a structured and intuitive way.

Instead of a generic to-do list, DevTrack focuses on **software development use cases**, allowing users to organize features, bugs, and implementation notes across multiple projects.

---

## 🚀 Overview

Developers often juggle multiple projects and ideas, leading to scattered notes, unfinished features, and lack of structure. DevTrack provides a centralized workspace to:

* Track progress across projects
* Manage tasks with clear status and priority
* Keep implementation notes organized
* Maintain a clean and focused development workflow

---

## ✨ Features (Planned)

### 🔐 Authentication

* User registration and login
* Secure authentication (JWT-based)
* Protected routes

### 📁 Projects

* Create, edit, and delete projects
* View all projects in a dashboard
* Track overall project progress

### ✅ Tasks

* Add tasks within projects
* Update task status (`todo`, `in-progress`, `done`)
* Assign priority levels
* Add development notes
* Delete tasks

### 📊 Dashboard

* Overview of all projects
* Task completion statistics
* Progress indicators

---

## 🧱 Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express
* MongoDB
* Mongoose

---

## 🧠 Concept

DevTrack is built around the idea that **developers need a simple but structured tool**, not a bloated productivity system.

It acts as a **personal project management layer**, bridging the gap between:

* simple to-do apps (too limited)
* enterprise tools (too complex)

---

## 📁 Project Structure

```
DevTrack/
  client/   # React frontend (Vite)
  server/   # Express API + MongoDB
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```
git clone <your-repo-url>
cd DevTrack
```

---

### 2. Setup backend

```
cd server
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=8080
```

Run the server:

```
npm run dev
```

---

### 3. Setup frontend

```
cd client
npm install
npm run dev
```

---

## 🔄 Development Workflow

* Frontend runs on: `http://localhost:5173`
* Backend runs on: `http://localhost:8080`
* Frontend communicates with backend via REST API

---

## 🎯 Goals

* Build a clean, maintainable full-stack architecture
* Practice real-world application patterns
* Deliver a polished, portfolio-ready project
* Focus on usability and simplicity

---

## 📌 Future Improvements

* Task filtering and search
* Drag-and-drop task management
* Time tracking per task
* Notifications
* Deployment (Vercel + cloud database)

---

## 📄 License

This project is open-source and available under the MIT License.
