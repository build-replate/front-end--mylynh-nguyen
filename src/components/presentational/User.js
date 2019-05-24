import React from 'react';
import {deleteUser} from '../../actions';
import { connect } from 'react-redux';

const User = props => {
    return (
      <div className="request">
      <h2>{props.name}</h2>
     <h4>Business Name: {props.businessName}</h4>
     <h4>Email: {props.email}</h4>
     <h4>Phone: {props.phone}</h4>
     <h4>Role: {props.userType}</h4>

        
        <button onClick={() => props.deleteUser(props.id)}>Delete</button>
      </div>
    );
  };
  
  export default connect(null, {deleteUser})(User);