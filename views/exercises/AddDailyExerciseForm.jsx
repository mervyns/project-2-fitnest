import React from "react";
import Header from "../layout/Header";

class AddDailyExerciseForm extends React.Component {
  render() {
    return (
      <html>
        <Header cookies={this.props.cookies}/>
        <div className="col-lg-4 center container">
          <h1 className="form-heading">Add Daily Exercise</h1>
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <h2>Add new exercise</h2>
              </div>
              <form id="addDailyExerciseForm" method='POST' action='/exercises/daily/new'>
                <div className="form-group">
                  <label for="inputName">Exercise Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Bench Press"
                  />
                </div>
                <div className="form-group">
                <label for="inputQty">Number Of Reps</label>
                <input
                  name="qty"
                  type="text"
                  className="form-control"
                  id="inputQty"
                  placeholder="Input Number of Reps"
                />
              </div>
                <button type="submit" className="btn btn-primary">
                  Add Exercise
                </button>
              </form>
            </div>
          </div>
        </div>
      </html>
    );
  }
}

module.exports = AddDailyExerciseForm;
