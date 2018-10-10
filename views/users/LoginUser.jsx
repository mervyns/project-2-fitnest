import React from "react";
import Header from "../layout/Header";

class CreateUser extends React.Component {
  render() {
    return (
      <html>
        <Header />
        <div className="col-lg-4 my-auto container">
          <h1 className="form-heading">Log In Form</h1>
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <h2>Log In</h2>
              </div>
              <form id="signup" method='POST' action='/users/login'>
                <div className="form-group">
                  <label for="inputName">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Jack Sparrow"
                  />
                </div>
                <div className="form-group">
                  <label for="inputPassword">Password</label>
                  <input
                      name="password"
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </html>
    );
  }
}

module.exports = CreateUser;
