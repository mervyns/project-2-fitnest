import React from "react";
import Header from "../layout/Header";

class ListDailyExercise extends React.Component {
  render() {
    const dailyExerciseArray = this.props.exercise.rows;
    const dailyExerciseList = dailyExerciseArray.map(item => {
      return (
        <li>
          <div className="col-lg-12">
            <span className="col-lg-2">{item.exercise_name}</span>
            <span className="col-lg-1">{item.exercise_type}</span>
            <span className="col-lg-2">{item.exercise_calories}</span>
            <span className="col-lg-2">{item.exercise_qty}</span>
            <span className="col-lg-2"></span>
          </div>
        </li>
      );
    });
    return (
      <html>
        <h2>Exercise List for today</h2>
        <div>{dailyExerciseList}</div>
      </html>
    );
  }
}

module.exports = ListDailyExercise;
