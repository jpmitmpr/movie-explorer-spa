# 🎬 Movie Explorer

Movie Explorer is a React single-page application that allows users to search for movies and explore movie details using the OMDb API. The application demonstrates modern React development practices including routing, state management with Context, API integration, and unit testing.

Users can search for movies, view detailed information about a specific movie, and save movies to a personal favorites list.

---

## 🌐 Live Demo

You can view the deployed application here:

**Live App:**
https://movie-explorer-b1egpm0fi-jpmitmprs-projects.vercel.app

---

## 📂 GitHub Repository

The source code for this project is available on GitHub:

**Repository:**
https://github.com/jpmitmpr/movie-explorer-spa

---

## 🚀 Features

* 🔍 Search for movies using the OMDb API
* 🎥 View movie details including poster, plot, and release information
* ⭐ Add and remove movies from a favorites list
* 🏠 Home page with application overview
* 🔐 Login page UI for authentication flow demonstration
* 📱 Responsive layout
* ⚛️ Built using React and Vite
* 🧪 Unit testing with Vitest and React Testing Library

---

## 🛠️ Technologies Used

* React
* React Router
* JavaScript (ES6+)
* Vite
* CSS
* OMDb API
* Vitest
* React Testing Library

---

## 🌐 API Used

This project uses the **OMDb API** to retrieve movie information.

API Documentation:
https://www.omdbapi.com/

Example API request:

https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=batman

The API is used to:

* Search for movies by title
* Retrieve detailed movie information by IMDb ID

---

## 📂 Project Structure

```
movie-explorer-spa/

src/
 ├── components/
 │   └── Header.jsx
 │
 ├── context/
 │   └── FavoritesContext.jsx
 │
 ├── pages/
 │   ├── Home.jsx
 │   ├── Login.jsx
 │   ├── Search.jsx
 │   ├── Favorites.jsx
 │   ├── MovieDetails.jsx
 │   └── NotFound.jsx
 │
 ├── services/
 │   └── api.js
 │
 ├── tests/
 │   ├── Home.test.jsx
 │   ├── Search.test.jsx
 │   └── auth.test.jsx
 │
 ├── App.jsx
 └── main.jsx

package.json
README.md
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

The app will run locally at:

```
http://localhost:5173
```

---

## 🧪 Running Tests

Run all tests with:

```
npm run test
```

Current tests include:

* **Home Page Test** – verifies the welcome message renders
* **Search Page Test** – confirms the search input and button render
* **Authentication Test** – checks the login form UI

Testing is implemented using **Vitest** and **React Testing Library**.

---

## 🔒 Security Considerations

Basic frontend security practices were implemented in this project.

**Input Sanitization (XSS Prevention)**
User input from the search field is sanitized before being used in API requests to prevent potential cross-site scripting (XSS) attacks.

**Environment Variables**
The OMDb API key is stored using environment variables rather than being hardcoded into the application.

```
VITE_OMDB_API_KEY=your_api_key_here
```

This prevents sensitive information from being exposed in the source code.

**CSRF Consideration**
Because this project does not include a backend server or authenticated API requests, CSRF attacks are not applicable in this architecture. The application only consumes public API data.

---

## 🌍 Deployment

This project is deployed using **Vercel**.

Vercel automatically builds and deploys the application whenever new changes are pushed to the GitHub repository.

Deployment steps:

1. Push code to GitHub
2. Connect the repository to Vercel
3. Configure environment variables
4. Vercel automatically builds and deploys the application

---

## 📖 Future Improvements

* Improve UI styling and layout
* Add filtering and sorting options for movie searches
* Expand authentication with a backend service
* Increase test coverage with additional edge case tests
* Add loading states and improved error handling

---

## 👨‍💻 Author

Developed as a React project for learning and practice.

---

## 📄 License

This project is open source and available under the **MIT License**.
