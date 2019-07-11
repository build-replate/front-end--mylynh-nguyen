
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    logout = (e) => {
      this.props.logout();
      this.props.history.push('/');
    }
  
    render() {
      

      const businessLinks = (
        <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout}>Logout</a></li>
        <li><Link to="/add-request">Add a request</Link></li>
        <li><Link to="/welcome">Requests</Link></li>
        <li><Link to="/users">User List</Link></li>
        </ul>
      );

      const volunteerLinks = (
        <ul>
          <li><a href="#" onClick={this.logout}>Logout</a></li>
          <li><Link to="/welcome">Requests</Link></li>
          <li><Link to="/users">User List</Link></li>
    
        </ul>
      );
  
      const guestLinks = (
          <ul>
            <li><Link to="/register">Volunteer Registration</Link></li>
            <li><Link to="/register-business">Business Registration</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
      );
  
      return (
          <nav>
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">Replate</Link>
              </div>
              <div>
                {/* {this.props.loggedIn ? businessLinks : guestLinks} */}
                {this.props.loggedIn 
                ? this.props.currentUser.userType === "business" 
                  ? businessLinks 
                    : this.props.currentUser.userType === "volunteer" 
                    ? volunteerLinks 
                  : guestLinks 
                : guestLinks}
              </div>
            </div>
          </nav>
      );
    }
  }