import React from "react";
import Header from "../layout/Header";
import ListDailyExercise from "./ListDailyExercise";

class ListWeeklyExercise extends React.Component {
  render() {
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <h1>The Day Before</h1>
                    <ListDailyExercise exerciseInfo={this.props.exerciseInfo2.rows} />
                </div>
          <div className="col-md-4">
            <h1>Yesterday</h1>
            <ListDailyExercise exerciseInfo={this.props.exerciseInfo1.rows} />
          </div>
          <div className="col-md-4">
              <h1>Today</h1>
              <ListDailyExercise exerciseInfo={this.props.exerciseInfo.rows} />
          </div>
        </div>
        </div>
      </html>
    );
  }
}

module.exports = ListWeeklyExercise;
