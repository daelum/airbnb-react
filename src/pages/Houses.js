// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import React from 'react'
import axios from 'axios'

//comment 1

export default function Houses() {
  const [houses, setHouses] = useState([])
  const [location, setLocation] = useState('')
  const [rooms, setRooms] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    // Fetch houses data from the API when the component mounts
    async function fetchHouses() {
      try {
        const response = await axios.get('http://localhost:4000/houses')
        console.log(response.data)
        setHouses(response.data) // Assuming the API returns an array of house objects
      } catch (err) {
        console.log(err)
      }
    }
    fetchHouses()
  }, [])

  const navigate = useNavigate()
  const navigateToHouse = () => {
    navigate('/House')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  const handleSearch = async () => {
    try {
      // send all data to the API
      const searchData = {
        location,
        rooms,
        price,
        title,
      }
      const filteredResponse = await axios.get('http://localhost:4000/houses', {
        params: searchData,
      })
      console.log({ searchData })
      console.log(filteredResponse)
      setHouses(filteredResponse.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div>
        <Header />
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
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-select"
                  >
                    <option selected>Any Location</option>
                    <option>Koh Phangan</option>
                    <option>Koh Samui</option>
                    <option>Bali</option>
                    <option>Mars</option>
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
                    onChange={(e) => setRooms(e.target.value)}
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
                    onChange={(e) => setPrice(e.target.value)}
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
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    type="search"
                    placeholder="House name.."
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <button
                    onClick={handleSearch}
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
          {houses &&
            houses.map((element, i) => (
              <div className="col" key={i}>
                <div className="card shadow">
                  <img src={element.photos} className="card-img-top" alt="" />
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
                      <p className="col card-text fs-6">
                        ${element.price}/night
                      </p>
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
