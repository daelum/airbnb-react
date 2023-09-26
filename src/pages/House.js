import { useState } from 'react'

// In the House page, create an object house with all the properties of a house:
let house = {
  title: 'Luxury Villa in Chaweng',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, reiciendis quis. Nesciunt possimus quos odit velit debitis fugiat, vero dolorum deleniti totam ipsum at amet esse expedita. Mollitia, laudantium. Corporis nesciunt animi amet  ullam nemo sequi, at perferendis saepe neque quibusdam! Molestiae nulla delectus, mollitia nihil rerum iste ullam hic reprehenderit obcaecati assumenda aut debitis ea fuga ut consectetur perspiciatis animi architecto voluptates quasi ad quaerat quidem necessitatibus! Soluta similique architecto laboriosam repellat velit libero quos voluptatum, harum a fugit inventore dolore. Tempora maiores perferendis quisquam exercitationem, ullam explicabo suscipit perspiciatis aspernatur rem ratione quibusdam mollitia nisi earum repudiandae incidunt.',
  price: 350,
  booking: true,
  location: 'Koh Samui',
  rooms: 4,
  rating: 0,
  photos: [
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png',
  ],
  host: {
    name: 'Daelum Marx',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
}

let reviews = {
  date: '15 Sept 2023 - 1:01',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi et ipsum natus, ullam optio eos accusantium sapiente inventore hic.',
  rating: 0,
  author: {
    name: 'Luke Gator',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
}

export default function House() {
  // Gallery
  // Create a state variable selectedPhoto that holds the photo to show in the large section of the gallery (the "selected" photo) and its function setSelectedPhoto.
  // Connect the function to each of the 9 thumbnails, so that clicking a thumbnail changes the large photo.
  const [selectedPhoto, setSelectedPhoto] = useState(
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png'
  )

  return (
    <>
      {/* <!-- LOGGED OUT --> */}
      {/* <!--<div className="header">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <img className="logo" src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png">
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success login-button me-2" type="submit">Login</button>
                        <button className="btn btn-outline-success logout-button" type="submit">Logout</button>
                    </form>
                </div>
            </nav>
        </div> --> */}
      {/* <!-- LOGGED IN --> */}
      <div>
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
      </div>
      {/* <!-- main imagess --> */}
      <div className="container border-bottom border-top">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid col-md-8"
              style={{ width: '100%', height: 'auto' }}
              src={selectedPhoto}
              alt="House One"
            />
          </div>
          <div className="col">
            <div className="container">
              <div className="row row-cols-3 pt-3">
                <div className="col mb-3">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[1]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[2]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[3]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
                <div className="col mb-3">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[4]}
                    className="col-md-2"
                    alt="..."
                  />{' '}
                </div>
                <div className="col">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[5]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[6]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
                <div className="col mb-3">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[7]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[8]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <img
                    onClick={(e) => setSelectedPhoto(e.target.src)}
                    style={{ width: '100%', height: 'auto' }}
                    src={house.photos[0]}
                    className="col-md-2"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container a">
          <div className="row">
            <div className="col-7 mt-4">
              <div>
                <h2>{house.title}</h2>
                <span className="bi bi-geo-alt-fill d-block">
                  {house.location} - {house.rooms} Bedrooms
                </span>
                <div className="row">
                  <div className="col col-2">
                    <img
                      alt=""
                      className="profile-pic rounded-circle me-3 d-inline-block mt-4"
                      style={{ width: '3rem', height: '3rem' }}
                      src={house.host.avatar}
                    />
                  </div>
                  <div className="col pt-4">
                    <div className="row">
                      <span className="fw-lighter small">Hosted by</span>
                    </div>
                    <div className="row">
                      <span className="fw-bold">{house.host.name}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3">{house.description}</p>
                <h4>2 Reviews</h4>
                <div>
                  {/* <!-- Review section --> */}
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: '100px' }}
                    ></textarea>
                    <label for="floatingTextarea2">Leave a review..</label>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button className="form-control mb-1">
                        <i className="bi bi-hand-thumbs-up"></i>
                      </button>
                    </div>
                    <div className="col">
                      <button className="form-control mb-1">
                        <i className="bi bi-hand-thumbs-down"></i>
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col pt-2">
                      <button className="btn btn-success pb-2">Submit</button>
                    </div>
                  </div>
                </div>
                {/* <!-- comment section --> */}
                <div className="border rounded mt-3 mb-2">
                  <div className="row">
                    <div className="col col-2">
                      <img
                        alt=""
                        className="profile-pic rounded-circle me-3 d-inline-block mt-4 ms-3"
                        style={{ width: '3rem', height: '3rem' }}
                        src={reviews.author.avatar}
                      />
                    </div>
                    <div className="col pt-4">
                      <div className="row">
                        <span className="fw-lighter small">{reviews.date}</span>
                      </div>
                      <div className="row">
                        <span className="fw-bold">{reviews.author.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="ms-3">{reviews.description}</p>
                    </div>
                  </div>
                </div>
                <div className="border mt-3 mb-2">
                  <div className="row">
                    <div className="col col-2 d-inline-block">
                      <img
                        alt=""
                        className="profile-pic rounded-circle me-3 mt-4 ms-3"
                        style={{ width: '3rem', height: '3rem' }}
                        src={reviews.author.avatar}
                      />
                    </div>
                    <div className="col pt-4">
                      <div className="row">
                        <span className="fw-lighter small">{reviews.date}</span>
                      </div>
                      <div className="row">
                        <span className="fw-bold">{reviews.author.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="ms-3">{reviews.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- request card --> */}
            <div className="col mt-5">
              <div className="container border rounded shadow">
                <h5 className="mt-3">${house.price}/night</h5>
                <span>2 Reviews</span>
                <form>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Send the host a message"
                      id="floatingTextarea2"
                      style={{ height: '100px' }}
                    ></textarea>
                  </div>
                  <button className="btn btn-success mb-3 pb-2">
                    Request Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


