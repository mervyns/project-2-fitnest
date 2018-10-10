import React from "react";
import Header from "../layout/Header";

class CreateUser extends React.Component {
  render() {
    return (
      <html>
        <Header />
        <div className="col-lg-4 center container">
          <h1 className="form-heading">Sign Up Form</h1>
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <h2>Create a New Account</h2>
              </div>
              <form id="signup" method='POST' action='/users/new'>
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
                  <label for="inputEmail">Email address</label>
                  <input
                      name="email"
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="jack@sparrow.com"
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
                <div className="form-group">
                  <label for="inputGender">
                    Gender (We are collecting this information to give you
                    better recommendations)
                  </label>
                  <select name="gender" id="inputGender" class="form-control">
                    <option selected>Choose Your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Gender-Fluid</option>
                    <option>Gender-Neutral</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div className="form-group">
                    <label for="inputAge">Age</label>
                  <input
                    name="age"
                    type="text"
                    className="form-control"
                    id="inputAge"
                    placeholder="Your Age"
                  />
                  <div className="input-group-append">
           <div className="input-group-text">Years</div>
         </div>
                </div>
                <div className="form-group">
                    <label for="inputHeight">Height</label>
                  <input
                    name="height"
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Your Height in CM"
                  />
                  <div className="input-group-append">
           <div className="input-group-text">CM</div>
         </div>
                </div>
                <div className="form-group">
                    <label for="inputWeight">Weight</label>
                  <input
                    name="weight"
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Your Weight in Kgs"
                  />
                  <div className="input-group-append">
           <div className="input-group-text">Kg</div>
         </div>
                </div>

                <div className="form-group">
                    <label for="inputCalories">Your Daily Calories Expended Target</label>

                  <input
                    name="caloriesTarget"
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="2500"
                  />
              <div className="input-group-append">
       <div className="input-group-text">KCal</div>
     </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
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
