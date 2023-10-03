import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

export default function Header() {
  return (
    <>
      {/* //   <!-- LOGGED OUT --> */}
      {/* // <div className="header">
          //   <nav className="navbar bg-body-tertiary">
          //     <div className="container-fluid">
          //       <img
          //         className="logo"
          //         src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
          //       />
          //       <form className="d-flex" role="search">
          //         <button
          //           className="btn btn-outline-success login-button me-2"
          //           type="submit"
          //         >
          //           Login
          //         </button>
          //         <button
          //           className="btn btn-outline-success logout-button"
          //           type="submit"
          //         >
          //           Logout
          //         </button>
          //       </form>
          //     </div>
          //   </nav>
          // </div> */}
      <div className="header">
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <img
              alt=""
              className="logo"
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            />
            <form className="d-flex" role="search">
              <Link
                to="/Profile"
                className="btn btn-outline-success login-button me-2"
                type="submit"
              >
                <img
                  alt=""
                  className="profile-pic rounded-circle me-1"
                  style={{ width: '1.27rem', height: '1.27rem' }}
                  src="images/IMG_8468.jpg"
                />
                Daelum M
              </Link>
              <Link
                to="/Login"
                className="btn btn-outline-success logout-button"
                type="submit"
              >
                Logout
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </>
  )
}
