# 🌿 AI Pantry & Budget Manager

An AI-powered Pantry and Budget Management System built using **Spring Boot**, **React**, and **PostgreSQL**.

The application helps users manage pantry inventory, reduce food waste through expiry alerts, track expenses, visualize spending patterns, and receive AI-powered recipe recommendations and budgeting advice.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Secure API Access
- Logout

---

## 🥗 Pantry Management

- Add Pantry Items
- View Pantry Items
- Edit Pantry Items
- Delete Pantry Items
- Track Item Quantity
- Expiry Date Management

---

## ⏰ Expiry Alerts

- Detect items nearing expiry
- View expiry status
- Reduce food waste

---

## 💰 Expense Tracker

- Add Expenses
- Edit Expenses
- View Expense History
- Monthly Expense Summary
- Category-wise Spending

---

## 📊 Budget Dashboard

- Total Monthly Expense
- Highest Spending Category
- Expense Distribution Pie Chart
- Budget Insights

---

## 🤖 AI Features

### 🍳 AI Recipe Suggestions

Suggests recipes using available pantry ingredients.

Shows:

- Available Ingredients
- Missing Ingredients

---

### 💡 AI Budget Advisor

Provides smart budgeting suggestions based on spending habits.

---

# 🛠 Tech Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven
- Swagger / OpenAPI

---

## Frontend

- React
- React Router
- Axios
- Recharts
- CSS

---

# 📂 Project Structure

```
AI-Pantry-Budget-Manager
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   ├── security
│   ├── exception
│   └── config
│
├── frontend
│   ├── pages
│   ├── components
│   ├── api
│   └── styles
│
└── README.md
```

---

# 📊 APIs

## Authentication

- POST /auth/register
- POST /auth/login

---

## Pantry

- GET /pantry/items
- POST /pantry/items
- PUT /pantry/items/{id}
- DELETE /pantry/items/{id}
- GET /pantry/items/expiry-alerts

---

## Expenses

- GET /expenses
- POST /expenses
- PUT /expenses/{id}
- GET /expenses/monthly-summary
- GET /expenses/category-summary

---

## AI

- GET /ai/recipes
- GET /ai/budget-advice

---

# 📖 API Documentation

Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

---

# 🚀 Installation

## Backend

```bash
git clone <repository-url>

cd backend

mvn clean install

mvn spring-boot:run
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🎯 Future Enhancements

- Email notifications for expiry alerts
- Barcode Scanner
- OCR Bill Scanner
- AI Meal Planner
- Grocery Recommendation System
- Shopping List Generator
- Cloud Deployment
- Mobile Application

---

# 📸 Screenshots

## Dashboard
![Dashboard](screenshots/dashboard.png)

## Pantry Management
![Pantry](screenshots/pantry.png)

## Expense Tracking
![Expenses](screenshots/expenses.png)

## Budget Dashboard
![Budget](screenshots/budget.png)

## AI Recipe Suggestions
![Recipes](screenshots/recipes.png)

## AI Budget Advisor
![Advisor](screenshots/advisor.png)

---

🌐 Live Demo: http://localhost:5173/

Backend API: https://your-backend-url.com
Swagger: https://your-backend-url.com/swagger-ui/index.html

# 👩‍💻 Developer

**Shreya Sharma**

B.Tech Electrical Engineering

National Institute of Technology Agartala

---

# ⭐ If you like this project

Give it a ⭐ on GitHub.
