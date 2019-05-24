import React, { Component } from 'react';
import User from './User';


export default class UserList extends Component {
    render() {
      return (
        <div className="user-list">
          <h1>List of Users</h1>
          <ul>
            {this.props.users.map(user => {
              return (
                <User
                  name={user.contact_name}
                  id={user.id}
                  businessName={user.business_name ? user.business_name : "N/A"}
                  address={user.address ? user.address : "N/A"}
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
  