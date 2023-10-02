import React from 'react'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <div
      className="bg-image d-flex vh-100 align-items-center "
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399115/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/thailand.jpg')`,
      }}
    >
      {/* <!-- Form container --> */}
      <div className="container w-25">
        <div className="card border-3 bg-light ms-0">
          <div className="container d-grid justify-content-center align-content-center">
            <img
              style={{ width: '150px' }}
              className="card-img-top p-3"
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
              alt=""
            />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
