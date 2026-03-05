# 🎬 Movie Explorer

Movie Explorer is a React web application that allows users to search and explore movies using an external movie API. Users can browse movies, search for specific titles, and navigate through different pages of the application.

---

## 🌐 Live Demo

You can view the deployed application here:

**Live App:**
https://vercel.com/jpmitmprs-projects/movie-explorer-spa/EBpgGFgMPTpd6gh4rwsBEFKVbzrP

---

## 📂 GitHub Repository

The source code for this project is available on GitHub:

**Repository:**
https://github.com/jpmitmpr/movie-explorer-spa.git

---

## 🚀 Features

* 🔍 Search for movies
* 🎥 Browse movie results
* 🔐 User authentication (Login page)
* 🏠 Home page with welcome message
* ⭐ Add movies to favorites
* ⚛️ Built with React
* 🧪 Unit testing using React Testing Library

---

## 🛠️ Technologies Used

* React
* React Router
* JavaScript (ES6+)
* CSS
* Vitest
* React Testing Library
* Vite

---

## 📂 Project Structure

```
movie-explorer-spa/
│
├── src/
│   ├── components/
│   │   └── Header.jsx
│   │
│   ├── context/
│   │   └── FavoritesContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Search.jsx
│   │   ├── Favorites.jsx
│   │   ├── MovieDetails.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── tests/
│   │   ├── Home.test.jsx
│   │   ├── Search.test.jsx
│   │   └── auth.test.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository

```
git clone https://github.com/jpmitmpr/movie-explorer-spa.git
```

2. Navigate to the project folder

```
cd movie-explorer-spa
```

3. Install dependencies

```
npm install
```

---

## ▶️ Run the Application

Start the development server:

```
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 🧪 Running Tests

Run all tests with:

```
npm run test
```

Example tests include:

* **Home Page Test** – checks if the welcome message renders.
* **Search Page Test** – verifies the search input and button exist.
* **Login Test** – confirms the login form renders correctly.

---

## 📌 Example Test

```
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'

test('renders home page text', () => {
  render(<Home />)
  expect(screen.getByText(/Welcome to Movie Explorer/i)).toBeInTheDocument()
})
```

---

## 🚀 Deployment

This project is deployed using **Vercel**.
Vercel automatically builds and deploys the application whenever changes are pushed to the GitHub repository.

---

## 📖 Future Improvements

* Improve UI styling
* Add more detailed movie information
* Add user authentication with a backend
* Increase test coverage
* Add filtering or sorting options for movies

---

## 👨‍💻 Author

Developed as a React project for learning and practice.

---

## 📄 License

This project is open source and available under the **MIT License**.
