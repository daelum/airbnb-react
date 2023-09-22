import LoginForm from './LoginForm'

export default function Login() {
  return (
    <div
      className="bg-image"
      style={{ backgroundImage: `url('logo192.png)`, height: '100vh' }}
    >
      {/* <!-- Form container --> */}
      <div className="container position-absolute top-50 start-50 translate-middle w-25 h-50">
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
