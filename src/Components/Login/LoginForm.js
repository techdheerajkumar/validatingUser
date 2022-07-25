import React from 'react';
function LoginForm(props) {
  return (
    <div className="d-flex flex-column text-start">
      <form onSubmit = {props.click}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="userName"
            onChange = {props.changeHandler}
            value={props.name}
            required
          />
          <div id="emailHelp" className="form-text">
            <p className="text-danger">{props.authenticateUser ?'User already exists, please try the different userName': ''}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="userPassword"
            onChange = {props.changeHandler}
            value={props.pass}
            disabled={props.authenticateUser}
            required
          />
        </div>
        <button type="submit" disabled={props.authenticateUser} className="btn btn-primary">
          Register now
        </button>
      </form>
    </div>
  );
}

export default LoginForm;