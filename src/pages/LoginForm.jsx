import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formInfo = { email, password }
    console.log(formInfo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label for="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="d-block form-control"
        />
        <label for="password" className="form-label mt-2">
          Password
        </label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="d-block form-control"
        />
        <button
          type="submit"
          className="d-block btn btn-success mt-2 ps-3 pe-3 pb-2"
        >
          Login
        </button>
        <div className="container pt-2 pb-2 ps-0">
          <span>
            New to AirBnb?{' '}
            <Link to="./SignUp" style={{ textUnderlinePosition: 'below' }}>
              SignUp
            </Link>
          </span>
        </div>
      </div>
    </form>
  )
}
