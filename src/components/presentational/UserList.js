import React, { Component } from 'react';
import User from './User';


export default class UserList extends Component {
    render() {
      return (
        <div className="card-group">
          <h1>List of Users</h1>
          <ul>
            {this.props.users.map(user => {
              return (
                <User
                  id={user.id}
                  username={user.username}
                  email={user.email}
                  phone={user.phone}
                  key={user.id}
                  userType={user.user_type}
                />
              );
            })}
          </ul>
        </div>
      );
    }
  }
  