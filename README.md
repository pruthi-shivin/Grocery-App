# Fresh Grocery Store

A responsive grocery ordering web application built using React and Vite.

The application allows users to browse grocery products, filter them by category, manage a shopping cart, and place orders with a clean and modern UI.

---

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/pruthi-shivin/Grocery-App
```

### 2. Navigate into the project folder

```bash
cd grocery-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The app will run locally on:

```txt
http://localhost:5173
```

---

## Features

- Product listing with category filtering
- Add to cart functionality
- Quantity increase/decrease controls
- Remove items from cart
- Order summary with subtotal, delivery fee, and total
- Out-of-stock product handling
- Animated order success notification
- Responsive design
- Dark mode support
- Interactive hover animations

---

## Tech Stack

- React
- Vite
- CSS3

---

## Project Structure

```txt
src/
├── components/
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   ├── OrderSummary.jsx
│   └── FilterBar.jsx
│
├── data/
│   └── products.js
│
├── styles/
│   └── app.css
│
├── App.jsx
└── main.jsx
```

---

## Project Structure Explanation

The project is divided into reusable React components to keep the code modular, maintainable, and easy to scale.

- `components/` contains all UI components separated by responsibility.
- `data/` stores static grocery product data separately from UI logic.
- `styles/` contains centralized styling for consistent design management.
- `App.jsx` manages global state such as cart data, filtering, dark mode, and order placement.

This structure improves readability and keeps business logic separated from presentation.

---
