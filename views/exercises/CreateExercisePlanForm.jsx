import React from "react";
import Header from "../layout/Header";

class AddExerciseForm extends React.Component {
  render() {
    const exerciseListArray = this.props.exerciseList.rows;
    const dailyExerciseSelection = exerciseListArray.map(exercise => {
      return (
        <div>
          <option value={exercise.exercise_name}>
            {exercise.exercise_name}
          </option>
        </div>
      );
    });
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <div className="col-lg-4 center container">
          <h1 className="form-heading">Add Exercise Plan</h1>
          <div className="login-form">
            <div className="main-div">
              <form
                id="addExerciseForm"
                method="POST"
                action="/exercises/plan/new"
              >
                <div className="form-group">
                  <label for="inputName">Exercise Plan Name</label>
                  <input
                    name="planName"
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="My Awesome Fitness Plan"
                  />
                </div>
                <div className="form-group">
                  <label for="input">Plan Description</label>
                  <input
                    name="description"
                    type="text"
                    className="form-control"
                    id="inputType"
                    placeholder="A Short Description ie. This Fitness Plan Rocks!"
                  />
                </div>
                <div className="form-group">
                  <label for="inputName">Exercise Name</label>
                  <select
                    name="exerciseName"
                    id="inputName"
                    className="form-control"
                  >
                    <option selected>Choose Your Exercise</option>
                    {dailyExerciseSelection}
                  </select>
                </div>
                <div className="form-group">
                  <label for="inputMajor">Reps</label>
                  <input
                    name="reps"
                    type="text"
                    className="form-control"
                    id="inputMajor"
                    placeholder="8"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Create My Awesome Fitness Plan!
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
