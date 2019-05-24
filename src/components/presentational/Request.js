import React from 'react';
import {deleteRequest, acceptRequest} from '../../actions';
import { connect } from 'react-redux';

const Request = props => {
    return (
      <div className="request">
        <h3>{props.title}</h3>
        <h4>Deadline: {props.expiresDate}, {props.expiresTime}</h4>
        <h4>Assigned to: {props.volunteer}</h4>
        <h5>from {props.businessName}, pickup at {props.businessAddress}</h5>
        
        <p>{props.desc}</p>
        
        <button onClick={() => props.deleteRequest(props.id)}>Delete</button>
        <button onClick={() => props.acceptRequest(props.currentUser.subject, props.name)}>Accept Request</button>
      </div>
    );
  };

  function mapStateToProps(state) {
    return state.auth
  }  
  
  export default connect(mapStateToProps, {acceptRequest, deleteRequest})(Request);