import React from "react";
import Header from "../layout/Header";

class ListDailyFood extends React.Component {
  render() {
    const dailyFoodArray = this.props.foodInfo;
    const dailyFoodList = dailyFoodArray.map(item => {
      return (
        <tr>
          <td>{item.food_name}</td>
          <td>{item.food_type}</td>
          <td>{item.food_qty}</td>
          <td>{item.portion}</td>
          <td>{item.food_calories * item.food_qty}</td>
        </tr>
      );
    });
    return (
      <html>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Food Name</th>
              <th scope="col">Food Type</th>
              <th scope="col">Qty</th>
              <th scope="col">Portion Size</th>
              <th scope="col">Total Calories</th>
            </tr>
          </thead>
          <tbody>{dailyFoodList}</tbody>
        </table>
      </html>
    );
  }
}

module.exports = ListDailyFood;
