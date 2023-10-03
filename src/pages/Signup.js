import React from 'react'
import SignUpForm from './SignUpForm'

export default function SignUp() {
  return (
    <div
      className="vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `url(
          'https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399115/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/thailand.jpg'
        )`,
      }}
    >
      {/* <!-- card container --> */}
      <div className="container w-50">
        <div className="card border-3 bg-light ms-0">
          <div className="container d-grid justify-content-center align-content-center">
            <img
              style={{ width: '150px' }}
              className="card-img-top p-3"
              alt=""
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            />
          </div>
          {/* <!-- form container --> */}
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
