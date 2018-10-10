import React from 'react'
import Header from './layout/Header';
import MainBody from './layout/MainBody'

class Index extends React.Component {
    render () {
        return(
            <html>
            <Header cookies={this.props.cookies}/>
            <MainBody />
            </html>
        )
    }
}

module.exports = Index;
