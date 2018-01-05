/**
 * @ Author - Sumit
 * @ Dated - 03 January 2018
 * @ It is a react component for Page nt found
 * */

import React from 'react'
import {Link} from 'react-router-dom'

class NoMatch extends React.Component {

    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry, but the page you were trying to view does not exist.</p>
                <Link to="/">Go Home</Link>
            </div>
        )
    }
}

export default NoMatch
