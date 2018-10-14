import React from "react";
const imagePath = "../../img/Background.jpg";

class MainBody extends React.Component {
  render() {
    return (
      <html>
        <div
          className="container-fluid h-100 my-auto text-center text-white"
          id="landing-image"
        >
          <div className="row h-100">
            <div className="col-lg-9 my-auto mx-auto text-div center-block">
              <br />
              <br />
              <br />
              <h1 className="text-uppercase mx-auto col-lg-6">
                <strong>FITNEST</strong>
              </h1>
              <br />
              <br />
              <h1 className="text-uppercase mx-auto col-lg-6">
                <strong>Your Fitness Community</strong>
              </h1>
              <hr />
              <hr />
              <hr />
              <div className="col-lg-12 mx-auto">
                <h3>
                  <p>Start tracking your fitness today!</p>
                  <p>
                    You can input your exercise routines or your nutrition plans
                    and track it daily
                  </p>
                  <p>
                    You can also browse through our database of Exercise
                    Routines and Nutrition Plans
                  </p>
                </h3>
                <br />
                <br />
                <div className="row">
                  <span className="center w-100 mb-1">
                    <a
                      className="btn btn-primary btn-lg js-scroll-trigger"
                      href="#about"
                    >
                      Sign Up
                    </a>
                  </span>
                  <span className="center w-100 mb-2">
                    Already a Member?{" "}
                    <a className="text-white bg-dark" href="/users/login">
                      Login Here
                    </a>
                  </span>
                  <span className="center w-100">
                    <a
                      className="btn btn-primary btn-success btn-sm js-scroll-trigger"
                      href="#about"
                    >
                      Browse Fitness Plans
                    </a>{" "}
                    <a
                      className="btn btn-primary btn-success btn-sm js-scroll-trigger"
                      href="#about"
                    >
                      Browse Nutrition Plans
                    </a>
                  </span>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </html>
    );
  }
}

module.exports = MainBody;
