import React from 'react';

const Requests = (props) => {
    const RequestList = props.requests.map(request => { 
        return (
            <div className='request-card' key={request.id}>
            <li>Title: {request.request_title}</li>
            <li>Description: {request.request_desc}</li>
            <li>Business Requesting: {request.business_requesting}</li>
            <li>Request Expires: {request.request_expires_date}, {request.request_expires_time}</li>
            <button onClick={() => props.deleteRequest(request.id)}>Delete</button>
            </div>
        )
    });

    return (
        <div className="request-list">

       <ul>{RequestList}</ul>
            
        </div>
    )
}
