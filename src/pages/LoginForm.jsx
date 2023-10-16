import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const navigateToProfile = () => {
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formInfo = { email, password }
    try {
      const response = await axios.post('http://localhost:4000/login', formInfo)
      console.log(response)
      if (response.data !== 'Invalid Email/Password!') {
        navigateToProfile()
      } else {
        console.log(response.data)
        setErrorMessage(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
        {errorMessage ? (
          <div
            className="text mt-2 ms-2"
            style={{ color: 'red', fontSize: '13px' }}
          >
            {errorMessage}
          </div>
        ) : null}
        <button
          onClick={navigateToProfile}
          to="/"
          type="submit"
          className="d-block btn btn-success mt-2 ps-3 pe-3 pb-2"
        >
          Login
        </button>
      </form>
      <div className="container pt-2 pb-2 ps-0">
        <span>
          New to AirBnb?{' '}
          <Link to="/SignUp" style={{ textUnderlinePosition: 'below' }}>
            SignUp
          </Link>
        </span>
      </div>
    </div>
  )
}
