import React, { Component } from 'react';
import Request from './Request';


export default class Requests extends Component {
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
  