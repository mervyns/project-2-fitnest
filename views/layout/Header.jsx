import React from "react";
const sha256 = require("js-sha256");
const cssLink = "../../css/styles.css";

class Header extends React.Component {
  render() {
    // Salt for Hash
    const SALT = "Too Much Salt Is Bad For Health";
    //Checking for Logged in Status
    if (this.props.cookies) {
      const checkSessionCookieHash = sha256(
        this.props.cookies.user_id + "logged_id" + SALT
      );
      // Initializing a variable to track whether User is logged in or not.
      // The variable can then be used in a Ternary to render login/logout button.
      var isLoggedIn = false;
      if (this.props.cookies.loggedIn === checkSessionCookieHash) {
        isLoggedIn = true;
      }
    }
    return (
      <html>
        <header>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href={cssLink} />
        </header>
        <body>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
              FitNest
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/exercises/all"
                    id="exerciseNavbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Exercises
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/exercises/all">
                      Show All Exercises
                    </a>
                    <a class="dropdown-item" href="/exercises/new">
                      Add a exercise
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/nutrition/all"
                    id="nutritionNavbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Nutrition
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/nutrition/all">
                      Show All Food
                    </a>
                    <a class="dropdown-item" href="/nutrition/new">
                      Add a food
                    </a>
                  </div>
                </li>
              </ul>
              {isLoggedIn ? (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/nutrition/all"
                      id="nutritionNavbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      User ID: {this.props.cookies.user_id} User Menu
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="/nutrition/daily/new">
                        Add Daily Nutrition
                      </a>
                      <a class="dropdown-item" href="/nutrition/daily/show">
                        Show Daily Nutrition
                      </a>
                      <a class="dropdown-item" href="/nutrition/dashboard">
                        Show Weekly Nutrition
                      </a>
                      <a class="dropdown-item" href="/exercises/daily/new">
                        Add Daily Exercises
                      </a>
                      <a class="dropdown-item" href="/exercises/daily/show">
                        Show Daily Exercises
                      </a>
                      <a class="dropdown-item" href="/exercises/dashboard">
                        Show Weekly Exercises
                      </a>
                      <a class="dropdown-item" href="/users/logout">
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              ) : (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/users/new">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/users/login">
                      Log In
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

module.exports = Header;
