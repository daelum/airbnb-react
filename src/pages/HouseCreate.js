import React from 'react'
import HouseCreateForm from './HouseCreateForm'
import { Link } from "react-router-dom"

export default function HouseCreate() {
  return (
    <>
      <div className="header">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <img
              className="logo"
              style={{ width: '7rem', height: 'auto' }}
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            />
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-success login-button me-2"
                type="submit"
              >
                <img
                  className="profile-pic rounded-circle me-1"
                  style={{ width: '1.27rem', height: '1.27rem' }}
                  src="images/IMG_8468.jpg"
                />
                Daelum M
              </button>
              <button
                className="btn btn-outline-success logout-button"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="container">
        <HouseCreateForm />
      </div>
    </>
  )
}



