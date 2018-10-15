import React from "react";
import Header from "../layout/Header";
import ListDailyExercise from "./ListDailyExercise";

class ListFitnessPlans extends React.Component {
  render() {
    const plansArray = this.props.plans;
    const plansList = plansArray.map(plan => {
      return (
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                {plan.fit_plan_name}
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">{plan.fit_plan_description}</div>
          </div>
        </div>
      );
    });
    return (
      <html>
        <Header cookies={this.props.cookies} />
        <div className="container">
            <h2>List Of Fitness Plans</h2>
        <div className="accordion" id="accordionExample">
          {plansList}
        </div>
        </div>
      </html>
    );
  }
}

module.exports = ListFitnessPlans;
