export default function LoginForm() {
  return (
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
            <a
              href="https://www.airbnb.com/signup_login"
              style={{ textUnderlinePosition: 'below' }}
            >
              SignUp
            </a>
          </span>
        </div>
      </form>
    </div>
  )
}
