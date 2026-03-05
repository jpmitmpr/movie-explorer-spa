Movie Explorer SPA

Movie Explorer is a React single-page application (SPA) that allows users to search for movies, view movie details, and manage a list of favorite movies. The application integrates with the OMDb API to fetch real movie data and demonstrates modern React development practices including routing, context state management, and testing.

This project was built as a final assignment to demonstrate front-end development skills, API integration, authentication logic, testing, and deployment.

Live Demo

You can view the deployed application here:

Live Application

https://movie-explorer-spa.vercel.app

(If using the Vercel preview link, ensure the project is deployed publicly in Vercel settings.)

GitHub Repository

Source code for the project:

https://github.com/jpmitmpr/movie-explorer-spa

Features

Search for movies using the OMDb API

View movie results dynamically

View detailed information for each movie

Add and remove movies from favorites

Simple authentication system

Home page with navigation

404 page for unknown routes

Built with React and React Router

Unit testing using React Testing Library and Vitest

Deployed using Vercel

Technologies Used

Frontend technologies used in this project:

React

React Router

Vite

JavaScript (ES6+)

CSS

React Context API

Vitest

React Testing Library

OMDb API

Project Structure
movie-explorer-spa
│
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   └── MovieCard.jsx
│   │
│   ├── context
│   │   ├── AuthContext.jsx
│   │   └── FavoritesContext.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Search.jsx
│   │   ├── Favorites.jsx
│   │   ├── MovieDetails.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── tests
│   │   ├── Home.test.jsx
│   │   ├── Search.test.jsx
│   │   ├── SearchEmpty.test.jsx
│   │   ├── auth.test.jsx
│   │   ├── loading.test.jsx
│   │   └── api.test.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
Environment Variables

This project requires an OMDb API key.

Create a .env file in the root of the project:

VITE_OMDB_API_KEY=your_api_key_here

You can obtain a free API key from:

https://www.omdbapi.com/apikey.aspx

Installation

Clone the repository:

git clone https://github.com/jpmitmpr/movie-explorer-spa.git

Navigate to the project folder:

cd movie-explorer-spa

Install dependencies:

npm install
Running the Application

Start the development server:

npm run dev

The application will run at:

http://localhost:5173
Running Tests

Run the test suite:

npm run test

Tests include:

Component rendering tests

Search functionality tests

Authentication tests

API error handling tests

Edge case tests for empty queries

Example test:

import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'

test('renders home page text', () => {
  render(<Home />)
  expect(screen.getByText(/Welcome to Movie Explorer/i)).toBeInTheDocument()
})
Security Considerations

Basic security considerations were implemented:

XSS Prevention

User input from the search field is sanitized by:

Using encodeURIComponent() before sending requests to the API

Avoiding direct HTML injection into the DOM

CSRF Considerations

Since the application does not communicate with a custom backend or perform authenticated server requests, CSRF risk is minimal. Authentication state is stored locally using localStorage for demonstration purposes.

API Security

API keys are stored in environment variables (.env)

Sensitive credentials are not hardcoded in the source code

Deployment

This project is deployed using Vercel.

Deployment process:

Push code to GitHub

Connect repository to Vercel

Configure environment variables in Vercel

Vercel automatically builds and deploys the application

Live deployment:

https://movie-explorer-spa.vercel.app

Future Improvements

Possible future improvements include:

Implement real backend authentication

Improve UI/UX with a component library

Add movie filtering and sorting

Add pagination for search results

Improve test coverage

Add protected routes for authenticated users

Author

Developed as a React project for educational purposes and to demonstrate:

React application architecture

API integration

Testing practices

Frontend deployment

License

This project is open source and available under the MIT License.