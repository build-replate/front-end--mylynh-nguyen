
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    logout = (e) => {
      this.props.logout();
      this.props.history.push('/');
    }
  
    render() {
      const userLinks = (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" onClick={this.logout}>Logout</a></li>
        </ul>
      );
  
      const guestLinks = (
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
      );
  
      return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/home" className="navbar-brand">Replate</Link>
              </div>
              <div className="collapse navbar-collapse">
                {this.props.loggedIn ? userLinks : guestLinks}
              </div>
            </div>
          </nav>
      );
    }
  }