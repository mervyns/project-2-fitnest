import React from "react";
import Header from "../layout/Header";

class ListDailyExercise extends React.Component {
  render() {
    const dailyExerciseArray = this.props.exerciseInfo;
    const dailyExerciseList = dailyExerciseArray.map(item => {
      return (
        <tr>
            <td>{item.exercise_name}</td>
            <td>{item.exercise_type}</td>
            <td>{item.exercise_qty}</td>
        </tr>
      );
    });
    return (
      <html>
        <h2>Exercise List for today</h2>
        <table className="table-responsive">
          <thead>
            <tr>
              <th scope="col">Exercise Name</th>
              <th scope="col">Exercise Type</th>
              <th scope="col">Qty</th>
            </tr>
          </thead>
          <tbody>{dailyExerciseList}</tbody>
        </table>
      </html>
    );
  }
}

module.exports = ListDailyExercise;
