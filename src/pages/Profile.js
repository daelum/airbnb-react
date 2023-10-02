import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Profile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [picture, setPicture] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formInfo = { name, email, picture }
    console.log(formInfo)
  }

  return (
    <>
      <div className="header">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <img
              className="logo"
              style={{ width: '7rem', height: 'auto' }}
              alt=""
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            />
            <form className="d-flex">
              <Link
                to="/Profile"
                className="btn btn-outline-success login-button me-2"
                type="submit"
              >
                <img
                  className="profile-pic rounded-circle me-1"
                  alt=""
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
      <div className="container">
        <div className="row">
          <div className="col-3 me-5 pe-5">
            <h1 className="border-bottom mb-4">Profile</h1>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                type="text"
              />
              <label className="mt-2">Email</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                type="email"
              />
              <label className="d-block mt-2">Profile picture</label>
              <img
                alt=""
                className="profile-pic rounded-circle me-3 d-block mt-2"
                style={{ width: '4rem', height: '4rem' }}
                src="https://randomuser.me/api/portraits/men/11.jpg"
              />
              <input
                required
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
                className="form-control mt-3"
                type="url"
                placeholder="http://"
              />
              <button type="submit" className="btn btn-success mt-3">
                Save Changes
              </button>
            </form>
          </div>
          <div className="col-7 ms-5 ps-5 ms-sm-0 ps-sm-0">
            <h1 className="border-bottom mb-4">My Listings</h1>
            <Link to="/HouseCreate" className="btn btn-success mb-4">
              List a House
            </Link>
            {/* <!-- NO LISTINGS YET(WITHOUTLISTINGS PROFILE.HTML) --> */}
            {/* <!-- <span className="form-control-lg border d-block">You don't have any houses listed</span> --> */}
            <div className="card mb-3" style={{ maxwidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    alt=""
                    className="card-img-top"
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor.</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <Link
                      to="/EditHouse"
                      className="form-control w-25 d-inline-block"
                    >
                      Edit
                    </Link>
                    <Link
                      to="/House"
                      className="form-control w-25 d-inline-block"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4" style={{ maxwidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    alt=""
                    className="card-img-top"
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor.</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <Link
                      to="/HouseCreate"
                      className="form-control w-25 d-inline-block"
                    >
                      Edit
                    </Link>
                    <Link
                      to="/House"
                      className="form-control w-25 d-inline-block"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
