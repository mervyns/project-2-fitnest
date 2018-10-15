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
          <td>{item.food_calories}</td>
          <td>{item.food_qty}</td>
          <td>{item.portion}</td>
        </tr>
      );
    });
    return (
      <html>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Food Name</th>
              <th scope="col">Food Type</th>
              <th scope="col">Food Calories</th>
              <th scope="col">Qty</th>
              <th scope="col">Portion Size</th>
            </tr>
          </thead>
          <tbody>{dailyFoodList}</tbody>
        </table>
      </html>
    );
  }
}

module.exports = ListDailyFood;
