import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "../context/AuthContext"
import Login from "../pages/Login"

test("renders login heading", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  )

  expect(
    screen.getByRole("heading", { name: /login/i })
  ).toBeInTheDocument()
})

test("renders email input", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  )

  expect(
    screen.getByPlaceholderText(/email/i)
  ).toBeInTheDocument()
})