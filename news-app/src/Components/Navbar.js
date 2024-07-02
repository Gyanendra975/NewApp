import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">GetUpdates</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to='/general'>Home <span className="sr-only"></span></Link>
              </li>
              {/* <li className="nav-item"> */}
              {/* <Link className="nav-link" href="">About</Link></li> */}
              <li><Link className="nav-link" to='/business'>Business</Link></li>
              <li><Link className="nav-link" to='/entertainment'>Entertainment</Link></li>
              <li><Link className="nav-link" to='/general'>General</Link></li>
              <li><Link className="nav-link" to='/health'>Health</Link></li>
              <li><Link className="nav-link" to='/science'>Science</Link></li>
              <li><Link className="nav-link" to='/sports'>Sports</Link></li>
              <li><Link className="nav-link" to='/technology'>Technology</Link></li>


            </ul>

          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
