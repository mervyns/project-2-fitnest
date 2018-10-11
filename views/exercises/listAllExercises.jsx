import React from "react";
import Header from "../layout/Header";

class ListAllExercises extends React.Component {
  render() {
    const exerciseArray = this.props.exercises.rows;
    console.log(exerciseArray);
    const exerciseList = exerciseArray.map(item => {
      return (
        <li>
          <div className="col-lg-12">
            <span className="col-lg-2">{item.exercise_name}</span>
            <span className="col-lg-1">{item.exercise_type}</span>
            <span className="col-lg-2">{item.exercise_img}</span>
            <span className="col-lg-2">{item.exercise_major_muscle_group}</span>
            <span className="col-lg-2">{item.exercise_minor_muscle_group}</span>
            <span className="col-lg-2">{item.exercise_notes}</span>
          </div>
        </li>
      );
    });
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <ol>{exerciseList}</ol>
      </html>
    );
  }
}

module.exports = ListAllExercises;
