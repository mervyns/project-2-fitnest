import React from "react";
import Header from "./Header";
import UserDashboard from "../users/UserDashboard";
import DailyFoodForm from "../nutrition/DailyFoodForm";
import AddDailyExerciseForm from "../exercises/AddDailyExerciseForm";
import ListDailyExercise from '../exercises/ListDailyExercise';
import ListDailyFood from '../nutrition/ListDailyFood';

class MainDashboard extends React.Component {
  render() {
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <div className="container-fluid">
          <div className="col-md-12 row">
            <UserDashboard userInfo={this.props.exerciseInfo} />
          </div>
          <div classname="row d-inline">
            <div className="col-md-6 d-flex float-left">
              <AddDailyExerciseForm />
            </div>
            <div className="col-md-6 d-flex float-right">
              <DailyFoodForm />
            </div>
            <div className="col-md-6 d-flex float-left">
              <ListDailyExercise exerciseInfo={this.props.exerciseInfo} />
            </div>
            <div className="col-md-6 d-flex float-right">
              <ListDailyFood foodInfo={this.props.foodInfo} />
            </div>
          </div>
        </div>
      </html>
    );
  }
}

module.exports = MainDashboard;
