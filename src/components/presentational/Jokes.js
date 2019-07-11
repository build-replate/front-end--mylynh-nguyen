import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteRequest, fetchUserById} from '../../actions';
import Request from './Request';


export class Requests extends Component {
    render() {
      return (
        <div className="requests-list">
          <h1>List of Requests</h1>
          <ul>
            {this.props.requests.map(request => {
              return (
                <Request
                  title={request.request_title}
                  id={request.id}
                  desc={request.request_desc}
                  expiresDate={request.request_expires_date}
                  expiresTime={request.request_expires_time}
                  key={request.id}
                  volunteer={request.volunteer_assigned ? request.volunteer_assigned : "none assigned yet"}

                  businessName= {request.business_requesting ? request.business_requesting.business_name : "anonymous"}
                  businessAddress={request.business_requesting ? request.business_requesting.address : "main office"}
                />
              );
            })}
          </ul>
        </div>
      );
    }
  }

const mapStateToProps = state => {
    return state.auth
}


export default connect(mapStateToProps, { fetchUserById, deleteRequest })(Requests);