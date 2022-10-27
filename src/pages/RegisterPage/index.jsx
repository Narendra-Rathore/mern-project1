import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";

const RegisterPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
    console.log(user);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(Endpoints.REGISTER_URL, user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-sm-6 wrapper">
            <h1>Register</h1>
            <hr />
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={user.firstName}
                  placeholder="Enter Your First Name"
                  onChange={ onChangeHandler }
                  name="firstName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  value={user.email}
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter Your Email"
                  onChange={ onChangeHandler }
                  name="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  value={user.password}
                  placeholder="Enter Your Password"
                  onChange={ onChangeHandler }
                  name="password"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Enter atleast 6 character
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="mobilenumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobilenumber"
                  value={user.mobile}
                  placeholder="Enter Your Mobile Number"
                  onChange={ onChangeHandler }
                  name="mobile"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
