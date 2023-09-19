function Signup() {
  return (
    <div
      style={{
        backgroundImage: `url(
          'https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399115/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/thailand.jpg'
        )`,
      }}
    >
      {/* <!-- card container --> */}
      <div className="container position-absolute top-50 start-50 translate-middle w-50 h-50">
        <div className="card border-3 bg-light ms-0">
          <div className="container d-grid justify-content-center align-content-center">
            <img
              style={{ width: '150px' }}
              className="card-img-top p-3"
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            />
          </div>
          {/* <!-- form container --> */}
          <div className="container">
            <form>
              <label for="text" className="form-label">
                Your Full Name
              </label>
              <input type="text" className="d-block form-control" />
              <label for="text" className="form-label">
                Profile Picture
              </label>
              <input
                type="url"
                placeholder="https://..."
                className="d-block form-control"
              />
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="d-block form-control" />
              <label for="password" className="form-label mt-2">
                Password
              </label>
              <input type="password" className="d-block form-control" />
              <button
                type="button"
                className="d-block btn btn-success mt-2 ps-3 pe-3 pb-2"
              >
                Signup
              </button>
              <div className="container pt-2 pb-2 ps-0">
                <span>
                  Already have an account?{' '}
                  <a
                    href=""
                    className="link-success"
                    style={{ TextUnderlinePosition: 'below' }}
                  >
                    Login
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
