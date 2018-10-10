import React from 'react'
import Header from './layout/Header';
import MainBody from './layout/MainBody'

class Index extends React.Component {
    render () {
        return(
            <html>
            <Header />
            <MainBody />
            </html>
        )
    }
}

module.exports = Index;
