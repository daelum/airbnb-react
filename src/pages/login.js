import logo from './logo.svg'
import './App.css'

function Login() {
    return (
        <div style={{backgroundImage: url(
            'https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399115/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/thailand.jpg'
            ), 
            }}>
            {/* <!-- Form container --> */}
            <div className="container position-absolute top-50 start-50 translate-middle w-25 h-50">
            <div className="card border-3 bg-light ms-0">
                <div className="container d-grid justify-content-center align-content-center">
                <img
                    style={{'width: 150px'}}
                    className="card-img-top p-3"
                    src={{'https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png'}}
                />
                </div>
                <div className="container">
                <form>
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
                    Login
                    </button>
                    <div className="container pt-2 pb-2 ps-0">
                    <span>
                        New to AirBnb?{' '}
                        <a href="" style={{'text-underline-position: below'}}>
                        Signup
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

export default Login 
