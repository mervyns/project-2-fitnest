import React from "react";
import Header from "./Header";
import UserDashboard from "../users/UserDashboard";
import DailyFoodForm from "../nutrition/DailyFoodForm";
import AddDailyExerciseForm from "../exercises/AddDailyExerciseForm";
import ListDailyExercise from "../exercises/ListDailyExercise";
import ListDailyFood from "../nutrition/ListDailyFood";

class MainDashboard extends React.Component {
  render() {
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <div className="container-fluid">
          <div className="col-md-12 row">
            <UserDashboard userInfo={this.props.exerciseInfo} />
          </div>
          <div className="row">
            <div className="col-md-6">
              <AddDailyExerciseForm exerciseList={this.props.exerciseList}/>
            </div>
            <div className="col-md-6">
              <DailyFoodForm foodList={this.props.foodList}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Today's Exercise</h2>
              <ListDailyExercise exerciseInfo={this.props.exerciseInfo} />
            </div>
            <div className="col-md-6">
              <h2>Today's Nutrition</h2>
              <ListDailyFood foodInfo={this.props.foodInfo} />
            </div>
          </div>
        </div>
      </html>
    );
  }
}

module.exports = MainDashboard;
