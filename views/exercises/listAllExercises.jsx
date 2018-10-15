import React from "react";
import Header from "../layout/Header";

class ListAllExercises extends React.Component {
  render() {
    const exercisesArray = this.props.exercises.rows;
    const exercisesArrayList = exercisesArray.map(item => {
      return (
        <tr>
          <td>{item.exercise_id}</td>
          <td>{item.exercise_name}</td>
          <td>{item.exercise_type}</td>
          <td>{item.exercise_major_muscle_group}</td>
          <td>{item.exercise_minor_muscle_group}</td>
          <td>{item.exercise_notes}</td>
        </tr>
      );
    });
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <div className="container">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">ID No.</th>
                <th scope="col">Exercise Name</th>
                <th scope="col">Exercise Type</th>
                <th scope="col">Major Muscle Group</th>
                <th scope="col">Minor Muscle Group</th>
                <th scope="col">Exercise Notes</th>
              </tr>
            </thead>
            <tbody>{exercisesArrayList}</tbody>
          </table>
        </div>
      </html>
    );
  }
}

module.exports = ListAllExercises;
