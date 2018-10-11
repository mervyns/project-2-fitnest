import React from 'react'
import Header from './Header'
import UserDashboard from '../users/UserDashboard'
import DailyFoodForm from '../nutrition/DailyFoodForm'
import ListDailyFood from '../nutrition/ListDailyFood'

class MainDashboard extends React.Component {
    render () {
        console.log(this.props)
        return(
            <html>
            <Header cookies={this.props.cookies} />
            <div classname="container-fluid">
            <div className="row">
                <UserDashboard userInfo={this.props.userInfo}/>
            </div>
            <div>
            <DailyFoodForm />
            <ListDailyFood />
            </div>
            </div>
            </html>
        )
    }
}

module.exports = MainDashboard;
