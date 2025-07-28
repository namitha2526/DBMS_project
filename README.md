# 🛍️ E-Commerce Website using SQLite

This is a dynamic E-commerce website built as a part of my DBMS project. The application features user login/logout functionality, session-based cart management, and persistent data storage using **SQLite**.

## 📌 Features

- 🔐 **User Authentication** (Login & Signup)
- 🛒 **Shopping Cart** functionality
- 🧾 **Product Catalog** display
- 📦 **Add to Cart** and checkout
- 💾 **SQLite** database for:
  - User credentials
  - Product listings
  - Cart history
- 📱 Responsive frontend using **HTML, CSS, and JavaScript**

## 🧱 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (or Python/Flask if applicable)
- **Database:** SQLite

## 🗂️ Project Structure

/ecommerce-project
│
├── index.html
├── login.html
├── register.html
├── products.html
├── cart.html
│
├── static/ # CSS, JS, images
├── db/ # SQLite database
│ └── ecommerce.db
│
├── server.js # (or app.py for Flask)
└── README.md


## 💡 How It Works

1. New users can register and login.
2. Products are displayed from the database.
3. Logged-in users can add items to their cart.
4. Cart items are stored and managed in the SQLite database.
5. Checkout logic is implemented to finalize orders.

## 🧪 How to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/namitha2526/ecommerce-sqlite.git
   cd ecommerce-sqlite
📘 Database Tables
Users: Stores login credentials

Products: List of available items

Cart: Stores user-specific cart items

🙋‍♀️ Author
Namitha R.
GitHub
