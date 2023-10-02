import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

//comment 1
// const [houses, setHouses] = useState([])

export default function Houses() {
  const houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 350,
      location: 'Koh Samui',
      rooms: 3,
      reviews: 2,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 350,
      location: 'Koh Samui',
      rooms: 3,
      reviews: 2,
      score: 1,
    },
  ]

  const navigate = useNavigate()
  const navigateToHouse = () => {
    navigate('/House')
  }

  const [location, setLocation] = useState('')
  const [rooms, setRooms] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // send all data to the API
    const searchData = {
      location,
      rooms,
      price,
      title,
    }

    console.log({ searchData })
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
        <form className="container" onSubmit={handleSubmit}>
          <nav className="navbar pb-0 d-inline-block">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-auto">
              <div className="col">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bi bi-geo-alt-fill"
                    id="basic-addon1"
                  ></span>
                  <select
                    onSubmit={(e) => setLocation(e.target.value)}
                    className="form-select"
                  >
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
                  <select
                    onSubmit={(e) => setRooms(e.target.value)}
                    className="form-select"
                  >
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
                  <input
                    onSubmit={(e) => setPrice(e.target.value)}
                    className="max-price form-select"
                    type="number"
                  />
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
                    onSubmit={(e) => setTitle(e.target.value)}
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
      <div onClick={navigateToHouse} className="container grid text-right">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-1">
          {/* <!-- first card --> */}
          {houses.map((element, i) => (
            <div className="col" key={i}>
              <div className="card shadow">
                <img src={element.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text fs-6">
                    <i className="bi bi-geo-alt-fill"></i>
                    {element.location} {'\u2B24'} {element.rooms} Rooms
                  </p>
                  <h5 className="card-title">{element.title}</h5>
                  <div className="row row-cols-2 pt-2 align-content-center">
                    <p className="col card-text">
                      <i className="bi bi-hand-thumbs-up-fill text-success"></i>
                      {element.reviews} Reviews
                    </p>
                    <p className="col card-text fs-6">${element.price}/night</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
