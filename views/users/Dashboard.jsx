import React from 'react'
import Header from '../layout/Header'

class Dashboard extends React.Component {
  render () {
    return (
      <html>
				<Header cookies={this.props.cookies} />
        <div>
        Hello <p>{this.props.userInfo[0].user_name}</p>
			</div>
      </html>
    )
  }
}

export default Dashboard;
