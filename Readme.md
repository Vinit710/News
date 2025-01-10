# 📰 News Application using MERN Stack

This project is a **News Application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The application fetches news from available APIs and displays them in an organized manner. Users can view, filter, and sort news based on their preferences.



```markdown
# 📰 NewsHub - Modern News Application

A modern news aggregation platform built with **React.js**, offering real-time news updates, category filtering, and a responsive design.

---

## 🌟 Features

✅ **Real-time News Updates**: Stay updated with the latest news.  
✅ **Category-based Filtering**: Browse news by categories like Politics, Sports, and Technology.  
✅ **Responsive Design**: Seamlessly works on mobile, tablet, and desktop devices.  
✅ **Dark Mode Support**: Enjoy news in your preferred theme.  
✅ **Search Functionality**: Find specific articles effortlessly.  
✅ **Clean UI**: Minimalistic and user-friendly interface.  

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router DOM  
- **Styling**: Tailwind CSS  
- **Icons**: React Icons  
- **HTTP Client**: Axios  
- **API**: NewsAPI  

---

## 🚀 **Project Features**
- Fetches live news data from external APIs.
- Displays news articles with title, description, and links.
- Allows sorting and filtering of news based on user preferences.
- Backend API built with **Node.js** and **Express.js**.
- Frontend built with **React.js**.
- Data storage and retrieval using **MongoDB**.

---

## 📂 **Project Structure**

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


---

## 📦 Installation

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








## 📱 Pages Overview

### 🏠 **Home**
- Displays top headlines.
- Dynamic news cards with images and brief summaries.

### 📊 **Categories**
- Browse news based on predefined categories.
- Interactive navigation for quick switching.

### 🔥 **Trending**
- View trending news globally.
- Highlighted cards for impactful stories.

### ℹ️ **About**
- Information about the project.
- Developer details and social links.

---

## 🔑 API Configuration

This project uses [NewsAPI](https://newsapi.org) to fetch real-time news.  
Ensure you have:
1. A valid NewsAPI key.
2. Added it to your `.env` file as `REACT_APP_NEWS_API_KEY`.

---

## 🚀 Deployment

### Build the application:
```bash
npm run build
```

### Deploy on platforms like:
- **Netlify**
- **Vercel**
- **GitHub Pages**

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a new branch.  
3. Make your changes.  
4. Submit a Pull Request.  

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Developer

**Vinit Desai**  
- **GitHub:** [Vinit710](https://github.com/Vinit710)  
 

---

Made with ❤️ by Vinit Desai
```

### ✅ Changes Made:
- Improved structure and clarity.
- Added clear instructions for API keys and deployment.
- Separated sections cleanly for better readability.
- Enhanced descriptions for pages and features.

Let me know if you’d like further refinements! 🚀











## 🤝 **Contributing**
Contributions are welcome! Feel free to submit a pull request.

---

## 📄 **License**
This project is licensed under the **MIT License**.

Happy Coding! 🚀😊

