import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import "./style.css";
import { Endpoints } from "../../api/Endpoints";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    // checkmeout:false
  });

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post(Endpoints.LOGIN_URL, user)
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
            <h1>Login</h1>
            <hr />
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={onChangeHandler}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  id="exampleInputPassword1"
                  onChange={onChangeHandler}
                />
              </div>
              {/* <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="checkmeout"
                  id="exampleCheck1"
                  onClick={ this.onClickHandler }
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
