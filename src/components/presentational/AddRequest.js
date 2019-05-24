import React, { Component } from 'react';


export default class AddRequest extends Component {
    state = {
      request_title: '',
      request_desc: '',
      completed: false,
      request_expires_date: '',
      request_expires_time: '',
      business_requesting: this.props.currentUser.subject
    };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.currentUser.subject);
    this.props.addRequest(this.state);
    this.props.history.push('/welcome');

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.onSubmit}>
            <h1>Add a Request</h1>
            <div className="form-group">
              <label htmlFor="request_title">Title of Request:</label>
              <input
                type="text"
                name="request_title"
                value={this.state.request_title}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="request_desc">Description of Request:</label>
              <input
                type="text"
                name="request_desc"
                value={this.state.request_desc}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="request_date">Date of Deadline:</label>
              <input
                type="text"
                name="request_expires_date"
                value={this.state.request_expires_date}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="request_time">Time of Deadline:</label>
              <input
                type="text"
                name="request_expires_time"
                value={this.state.request_expires_time}
                onChange={this.onChange}
              />
            </div>

            
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Add Request</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

