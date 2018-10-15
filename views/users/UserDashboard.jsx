import React from "react";
import Header from "../layout/Header";

class UserDashboard extends React.Component {
  render() {
    return (
      <html>
        <div className="container">
          <p>Hello {this.props.userInfo[0].user_name}</p>
        </div>
      </html>
    );
  }
}

export default UserDashboard;
