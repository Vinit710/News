# 📰 News Application using MERN Stack

This project is a **News Application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The application fetches news from available APIs and displays them in an organized manner. Users can view, filter, and sort news based on their preferences.

## 🚀 **Project Features**
- Fetches live news data from external APIs.
- Displays news articles with title, description, and links.
- Allows sorting and filtering of news based on user preferences.
- Backend API built with **Node.js** and **Express.js**.
- Frontend built with **React.js**.
- Data storage and retrieval using **MongoDB**.

---

## 📂 **Project Structure**
```
news-app/
│
├── backend/       # Express & MongoDB Backend
│   ├── config/    # MongoDB Connection
│   ├── models/    # Database Models
│   ├── routes/    # API Routes
│   ├── controllers/ # Business Logic
│   ├── server.js  # Main Backend File
│   └── .env       # Environment Variables
│
├── frontend/      # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/news-app.git
cd news-app
```

### **2. Setup Backend**
```bash
cd backend
npm install
```
- Create a `.env` file in the backend folder and add MongoDB URI:
```
MONGO_URI=mongodb://localhost:27017/newsdb
```
- Start the backend server:
```bash
npm run dev
```
Backend will run on `http://localhost:5000`

### **3. Setup Frontend**
```bash
cd ../frontend
npm install
```
- Start the frontend server:
```bash
npm start
```
Frontend will run on `http://localhost:3000`

### **4. Verify MongoDB Compass Connection**
- Open **MongoDB Compass**.
- Connect using `mongodb://localhost:27017/newsdb`.
- Verify that the `newsdb` database is created.

### **5. Test Application**
- Visit `http://localhost:3000` in your browser.
- The homepage will display news articles.

---

## 📊 **Tech Stack**
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Integration:** Axios

---

## 🤝 **Contributing**
Contributions are welcome! Feel free to submit a pull request.

---

## 📄 **License**
This project is licensed under the **MIT License**.

Happy Coding! 🚀😊

