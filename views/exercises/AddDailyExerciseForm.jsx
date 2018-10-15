import React from "react";
import Header from "../layout/Header";

class AddDailyExerciseForm extends React.Component {
  render() {
    const exerciseListArray = this.props.exerciseList;
    const dailyExerciseSelection = exerciseListArray.map(exercise => {
      return (
        <div>
          <option value={exercise.exercise_name}>{exercise.exercise_name}</option>
        </div>
      );
    });
    return (
      <html>
        <h1 className="form-heading">Add Exercise To Daily Tracker</h1>
        <div className="login-form">
          <div className="main-div">
            <form
              id="addDailyExerciseForm"
              method="POST"
              action="/exercises/daily/new"
            >
              <div className="form-group">
                <label for="inputName">Exercise Name</label>
                <select name="name" id="inputName" className="form-control">
                  <option selected>Choose Your Exercise</option>
                  {dailyExerciseSelection}
                </select>
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
      </html>
    );
  }
}

module.exports = AddDailyExerciseForm;
