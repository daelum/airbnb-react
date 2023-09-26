import { Link } from 'react-router-dom'

export default function EditHouse() {
  return (
    <>
      <div className="header">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <img
              alt=""
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
                  alt=""
                  className="profile-pic rounded-circle me-1"
                  style={{ width: '1.27rem', height: '1.27rem' }}
                  src="images/IMG_8468.jpg"
                />
                Daelum M
              </button>
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
        <form>
          <h1>Edit House</h1>
          <label>Short Title</label>
          <input className="form-control" type="text" />
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Describe your property.."
            id="floatingTextarea2"
            style={{ height: '100px' }}
          ></textarea>
          <label>Number of Rooms</label>
          <input className="form-control" type="number" />
          <label>Location</label>
          <select className="form-control">
            <option>Koh Samui</option>
            <option>Koh Phangan</option>
            <option>Mars</option>
          </select>
          <label>Price (per night)</label>
          <input className="form-control" type="number" />
          <label>Add Photos(up to 9)</label>
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <input
            className="form-control mb-2"
            placeholder="http://.."
            type="text"
          />
          <Link
            to="/Profile"
            className="form-control btn btn-success mb-2"
            type="submit"
            style={{ width: '100px' }}
          >
            Save Changes
          </Link>
          <Link
            to="/Profile"
            className="form-control btn btn-danger mb-5 d-block "
            type="submit"
            style={{ width: '100px' }}
          >
            Delete House
          </Link>
        </form>
      </div>
    </>
  )
}


