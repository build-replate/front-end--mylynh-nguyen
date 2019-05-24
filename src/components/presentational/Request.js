import React from 'react';
import {deleteRequest} from '../../actions';
import { connect } from 'react-redux';

const Request = props => {
    return (
      <div className="request">
        <h3>{props.title}</h3>
        <h4>Deadline: {props.expiresDate}, {props.expiresTime}</h4>
        <p>{props.desc}</p>
        
        <button onClick={() => props.deleteRequest(props.id)}>Delete</button>
      </div>
    );
  };
  
  export default connect(null, {deleteRequest})(Request);