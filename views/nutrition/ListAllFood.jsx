import React from "react";
import Header from "../layout/Header";

class ListAllFood extends React.Component {
  render() {
    const nutritionArray = this.props.nutrition.rows;
    console.log(nutritionArray);
    const nutritionList = nutritionArray.map(item => {
      return (
        <li>
          <div className="col-lg-12">
            <span className="col-lg-2">{item.food_name}</span>
            <span className="col-lg-1">{item.food_type}</span>
            <span className="col-lg-2">{item.exercise_img}</span>
            <span className="col-lg-2">{item.food_calories}</span>
            <span className="col-lg-2">{item.portion}</span>
          </div>
        </li>
      );
    });
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <ol>{nutritionList}</ol>
      </html>
    );
  }
}

module.exports = ListAllFood;
