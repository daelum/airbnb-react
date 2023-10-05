import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true
// import { formatWithCursor } from 'prettier'

export default function SignUpForm() {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formInfo = { name, avatar, email, password }
    console.log(formInfo)
    try {
      const response = await axios.post(
        'http://localhost:4000/SignUp',
        formInfo
      )
      console.log(response)
      if (response) {
        navigateToProfile()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const navigateToProfile = () => {
    navigate('/Profile')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label for="text" className="form-label">
          Your Full Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="d-block form-control"
        />
        <label for="text" className="form-label">
          Profile Picture
        </label>
        <input
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="https://..."
          className="d-block form-control"
        />
        <label for="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="d-block form-control"
        />
        <label for="password" className="form-label mt-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="d-block form-control"
        />
        <button
          type="submit"
          className="d-block btn btn-success mt-2 ps-3 pe-3 pb-2"
        >
          SignUp
        </button>
        <div className="container pt-2 pb-2 ps-0">
          <span>
            Already have an account?{' '}
            <Link
              to="/Login"
              className="link-success"
              style={{ TextUnderlinePosition: 'below' }}
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </form>
  )
}
