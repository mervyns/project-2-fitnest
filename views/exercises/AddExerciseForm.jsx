import React from "react";
import Header from "../layout/Header";

class AddExerciseForm extends React.Component {
  render() {
    return (
      <html>
        <Header cookies={this.props.cookies}/>
        <div className="col-lg-4 center container">
          <h1 className="form-heading">Add Exercise</h1>
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <h2>Add a new exercise</h2>
              </div>
              <form id="addExerciseForm" method='POST' action='/exercises/new'>
                <div className="form-group">
                  <label for="inputName">Exercise Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Push Ups"
                  />
                </div>
                <div className="form-group">
                  <label for="input">Exercise Type</label>
                  <input
                      name="type"
                    type="text"
                    className="form-control"
                    id="inputType"
                    placeholder="Plyo"
                  />
                </div>

                <div className="form-group">
                    <label for="inputImg">Exercise Img Link</label>
                  <input
                    name="img"
                    type="text"
                    className="form-control"
                    id="inputImg"
                    placeholder="Link to your img(if any)"
                  />
                </div>
                <div className="form-group">
                    <label for="inputMajor">Major Muscle Group Worked</label>
                  <input
                    name="major"
                    type="text"
                    className="form-control"
                    id="inputMajor"
                    placeholder="Chest"
                  />
                </div>
                <div className="form-group">
                    <label for="inputMinor">Minor Muscle Group Worked</label>
                  <input
                    name="minor"
                    type="text"
                    className="form-control"
                    id="inputMinor"
                    placeholder="Lats"
                  />
                </div>
                <div className="form-group">
                    <label for="inputNotes">Additional Exercise Notes</label>
                  <input
                    name="notes"
                    type="text"
                    className="form-control"
                    id="inputNotes"
                    placeholder="Keep your back straight"
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

module.exports = AddExerciseForm;
