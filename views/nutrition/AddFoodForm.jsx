import React from "react";
import Header from "../layout/Header";

class AddFoodForm extends React.Component {
  render() {
    return (
      <html>
        <Header cookies={this.props.cookies}/>
        <div className="col-lg-4 center container">
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
                <div className="form-group">
                  <label for="inputType">Food Type</label>
                  <input
                      name="type"
                    type="text"
                    className="form-control"
                    id="inputType"
                    placeholder="Main Course"
                  />
                </div>
                <div className="form-group">
                    <label for="inputCalories">Food Calories</label>
                  <input
                    name="calories"
                    type="text"
                    className="form-control"
                    id="inputCalories"
                    placeholder="360"
                  />
                </div>
                <div className="form-group">
                    <label for="inputPortion">Portion Size</label>
                  <input
                    name="portion"
                    type="text"
                    className="form-control"
                    id="inputPortion"
                    placeholder="Plate/Bowl"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Food
                </button>
              </form>
            </div>
          </div>
        </div>
      </html>
    );
  }
}

module.exports = AddFoodForm;
