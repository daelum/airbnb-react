import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Houses() {
  const navigate = useNavigate()

  const navigateToHouse = () => {
    navigate('/House')
  }

  return (
    //   <!-- LOGGED OUT -->
    //  <div class="header">
    //     <nav class="navbar bg-body-tertiary">
    //         <div class="container-fluid">
    //             <img class="logo" src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png">
    //             <form class="d-flex" role="search">
    //                 <button class="btn btn-outline-success login-button me-2" type="submit">Login</button>
    //                 <button class="btn btn-outline-success logout-button" type="submit">Logout</button>
    //             </form>
    //         </div>
    //     </nav>
    // </div>
    <div>
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
      {/* <!-- Nav bar wrap --> */}
      <div className="navbar" style={{ backgroundColor: '#ce010113' }}>
        <form className="container">
          <nav className="navbar pb-0 d-inline-block">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-auto">
              <div className="col">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bi bi-geo-alt-fill"
                    id="basic-addon1"
                  ></span>
                  <select className="form-select">
                    <option selected>Any Location</option>
                    <option>Koh Phangan</option>
                    <option>Koh Samui</option>
                    <option>Bali</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bi bi-house-fill"
                    id="basic-addon1"
                  ></span>
                  <select className="form-select">
                    <option selected>Any Rooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bi bi-currency-dollar"
                    id="basic-addon1"
                  ></span>
                  <input className="max-price form-select" type="number" />
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bi bi-sort-down"
                    id="basic-addon1"
                  ></span>
                  <select className="sort-price form-select">
                    <option>Price(low to high)</option>
                    <option>Price(high to low)</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="House name.."
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <button
                    className="form-control btn btn-success"
                    type="sumbit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </form>
      </div>
      {/* <!-- cards container starts here --> */}
      <div className="container grid text-right">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-1">
          {/* <!-- first card --> */}
          <div className="col">
            <div onClick={navigateToHouse} className="card shadow">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text fs-6">
                  <i className="bi bi-geo-alt-fill"></i>Koh Samui {'\u2B24'} 4
                  Rooms
                </p>
                <h5 className="card-title">Luxury Villa in Chaweng</h5>
                <div className="row row-cols-2 pt-2 align-content-center">
                  <p className="col card-text">
                    <i className="bi bi-hand-thumbs-up-fill text-success"></i>3
                    Reviews
                  </p>
                  <p className="col card-text fs-6">$350/night</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Second Card --> */}
          <div onClick={navigateToHouse} className="col">
            <div className="card shadow">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"></i>Koh Phangan {'\u2B24'} 3
                  Rooms
                </p>
                <h5 className="card-title">Private Villa Lotus 1</h5>
                <div className="row row-cols-2 pt-2 align-content-center">
                  <p className="card-text">
                    <i className="bi bi-hand-thumbs-up-fill text-success"></i>1
                    Review
                  </p>
                  <p className="card-text">$150/night</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Third Card --> */}
          <div onClick={navigateToHouse} className="col">
            <div className="card shadow">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"></i>Bali {'\u2B24'} 3 Rooms
                </p>
                <h5 className="card-title">Seminyak KuDeTa Beach</h5>
                <div className="row row-cols-2 pt-2 align-content-center">
                  <p className="card-text">
                    <i className="bi bi-hand-thumbs-down-fill text-danger"></i>2
                    Reviews
                  </p>
                  <p className="card-text">$120/night</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Forth Card --> */}
          <div onClick={navigateToHouse} className="col">
            <div className="card shadow">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"></i>Bali {'\u2B24'} 5 Rooms
                </p>
                <h5 className="card-title">5 Bed Villa Canggu</h5>
                <div className="row row-cols-2 pt-2 align-content-center">
                  <p className="card-text">
                    <i className="bi bi-hand-thumbs-up-fill text-success"></i>1
                    Reviews
                  </p>
                  <p className="card-text">$250/night</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Fifth Card --> */}
          <div onClick={navigateToHouse} className="col">
            <div className="card shadow">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"></i>Koh Phangan {'\u2B24'} 2
                  Rooms
                </p>
                <h5 className="card-title">Archie Village House</h5>
                <div className="row row-cols-2 pt-2 align-content-center">
                  <p className="card-text">
                    <i className="bi bi-hand-thumbs-up-fill text-success"></i>1
                    Reviews
                  </p>
                  <p className="card-text">$80/night</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Sixth Card --> */}
          <div onClick={navigateToHouse} className="col">
            <div className="card shadow">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"></i>Koh Phangan {'\u2B24'} 6
                  Rooms
                </p>
                <h5 className="card-title">Luxury 6 Beds Villa</h5>
                <div className="row row-cols-2 pt-2 align-content-center">
                  <p className="card-text">0 Reviews</p>
                  <p className="card-text">$150/night</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Seventh Card --> */}
          <div onClick={navigateToHouse} className="col">
            <div className="card shadow">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"></i>Koh Phangan {'\u2B24'} 4
                  Rooms
                </p>
                <h5 className="card-title">Luxury Villa in Chaweng</h5>
                <div className="row row-cols-2 pt-2 align-content-center">
                  <p className="card-text">0 Reviews</p>
                  <p className="card-text">$100/night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


