import React from "react";
import Header from "../layout/Header";

class ListAllFood extends React.Component {
  render() {
    const nutritionArray = this.props.nutrition.rows;
    const nutritionList = nutritionArray.map(item => {
      return (
        <tr>
            <td>{item.food_id}</td>
                <td>{item.food_name}</td>
          <td>{item.food_type}</td>
          <td>{item.portion}</td>
          <td>{item.food_calories}</td>
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
                    <th scope="col">Food Name</th>
              <th scope="col">Food Type</th>
              <th scope="col">Portion Size</th>
              <th scope="col">Total Calories</th>
            </tr>
          </thead>
          <tbody>{nutritionList}</tbody>
        </table>
        </div>
      </html>
    );
  }
}

module.exports = ListAllFood;
