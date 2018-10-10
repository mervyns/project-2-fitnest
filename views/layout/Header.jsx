import React from "react";
const sha256 = require("js-sha256");
const cssLink = "../../css/styles.css";

class Header extends React.Component {
  render() {
    // Salt for Hash
    const SALT = "Too Much Salt Is Bad For Health";
    const checkSessionCookieHash = sha256(
      this.props.cookies.user_id + "logged_id" + SALT
    );
    // Initializing a variable to track whether User is logged in or not.
    // The variable can then be used in a Ternary to render login/logout button.
    var isLoggedIn = false;
    if (this.props.cookies.loggedIn === checkSessionCookieHash) {
      isLoggedIn = true;
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
            <a class="navbar-brand" href="#">
              Navbar
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
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                {isLoggedIn ? (
                  <form method="GET" action="/users/logout">
                    <span>Current User ID : {this.props.cookies.user_id}</span>
                    <button
                      className="btn btn-outline-danger my-2 my-sm-0"
                      type="submit"
                    >
                      Log Out
                    </button>
                  </form>
                ) : (
                  <span>
                    <li class="nav-item">
                      <a class="nav-link" href="/users/new">
                        Sign Up
                      </a>{" "}
                    </li>
                    <li>
                      <a class="nav-link" href="/users/login">
                        Log In
                      </a>{" "}
                    </li>
                  </span>
                )}
                <li>
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
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
