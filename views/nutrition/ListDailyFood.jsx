import React from "react";
import Header from "../layout/Header";

class ListDailyFood extends React.Component {
  render() {
    const dailyFoodArray = this.props.food.rows;
    const dailyFoodList = dailyFoodArray.map(item => {
      return (
        <li>
          <div className="col-lg-12">
            <span className="col-lg-2">{item.food_name}</span>
            <span className="col-lg-1">{item.food_type}</span>
            <span className="col-lg-2">{item.food_calories}</span>
            <span className="col-lg-2">{item.food_qty}</span>
            <span className="col-lg-2">{item.portion}</span>
          </div>
        </li>
      );
    });
    return (
      <html>
        <h2>Food List for today</h2>
        <div>{dailyFoodList}</div>
      </html>
    );
  }
}

module.exports = ListDailyFood;
