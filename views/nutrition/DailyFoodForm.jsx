import React from "react";
import Header from "../layout/Header";

class AddDailyFoodForm extends React.Component {
  render() {
      const foodListArray = this.props.foodList;
      console.log(this.props.foodList)
      const dailyFoodSelection = foodListArray.map(food => {
        return (
          <div>
            <option value={food.food_name}>{food.food_name}    || Calories Per Serving : {food.food_calories}</option>
          </div>
        );
      });
    return (
      <html>
          <h1 className="form-heading">Add Food To Daily Tracker</h1>
          <div className="login-form">
            <div className="main-div">
              <form
                id="addDailyFoodForm"
                method="POST"
                action="/nutrition/daily/new"
              >

                  <div className="form-group">
                    <label for="inputName">Food Name</label>
                    <select name="name" id="inputName" className="form-control">
                      <option selected>Choose Your Food</option>
                      {dailyFoodSelection}
                    </select>
                  </div>
                <div className="form-group">
                  <label for="inputServing">Servings</label>
                  <input
                    name="qty"
                    type="text"
                    className="form-control"
                    id="inputServing"
                    placeholder="Servings"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Food
                </button>
              </form>
          </div>
        </div>
      </html>
    );
  }
}

module.exports = AddDailyFoodForm;
