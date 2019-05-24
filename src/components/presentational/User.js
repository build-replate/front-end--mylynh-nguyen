import React from 'react';
import {deleteUser} from '../../actions';
import { connect } from 'react-redux';

const User = props => {
    return (
<div className="card-group">
  <div className="card">
    <img className="card-img-top img-responsive" src="https://i.imgur.com/zyMSBTq.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">Business Name: {props.businessName}</p>
      <p className="card-text">User Name: {props.username}</p>
      <p className="card-text">Email: {props.email}</p>
      <p className="card-text">Phone: {props.phone}</p>
      <p className="card-text">Role: {props.userType}</p>

         
      <button onClick={() => props.deleteUser(props.id)}>Delete</button>
      
    </div>
  </div>
</div>
    );
  };
  
  export default connect(null, {deleteUser})(User);