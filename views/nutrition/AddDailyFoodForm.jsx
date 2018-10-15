import React from "react";
import Header from "../layout/Header";

class AddDailyFoodForm extends React.Component {
  render() {
    return (
      <html>
        <Header cookies={this.props.cookies}/>
          <h1 className="form-heading">Add Food</h1>
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <h2>Add new food</h2>
              </div>
              <form id="addFoodForm" method='POST' action='/nutrition/new'>
                <div className="form-group">
                  <label for="inputName">Food Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Chicken Rice"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Food
                </button>
              </form>
            </div>
        </div>
      </html>
    );
  }
}

module.exports = AddDailyFoodForm;
