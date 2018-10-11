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
          <div className="d-flex">
            <div className="row h-100">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>Your Fitness community</strong>
                </h1>
                <hr />
              </div>
              <div className="col-lg-8 mx-auto">
                <p>Start tracking your fitness today!</p>
                <p>
                  You can input your exercise routines or your nutrition plans
                  and track it daily
                </p>
                <p>
                  You can also browse through our database of Exercise Routines
                  and Nutrition Plans
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                >
                  Sign Up
                </a>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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
