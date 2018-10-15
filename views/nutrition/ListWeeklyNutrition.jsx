import React from "react";
import Header from "../layout/Header";
import ListDailyFood from "./ListDailyFood";

class ListWeeklyExercise extends React.Component {
  render() {
      console.log(this.props.nutritionInfo)
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <h1>The Day Before</h1>
                    <ListDailyFood foodInfo={this.props.nutritionInfo2.rows} />
                </div>
          <div className="col-md-4">
            <h1>Yesterday</h1>
            <ListDailyFood foodInfo={this.props.nutritionInfo1.rows} />
          </div>
          <div className="col-md-4">
              <h1>Today</h1>
              <ListDailyFood foodInfo={this.props.nutritionInfo.rows} />
          </div>
        </div>
        </div>
      </html>
    );
  }
}

module.exports = ListWeeklyExercise;
