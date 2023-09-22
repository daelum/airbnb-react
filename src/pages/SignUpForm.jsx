export default function SignUpForm() {
  return (
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
          SignUp
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
  )
}
