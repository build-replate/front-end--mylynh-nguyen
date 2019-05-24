import React, { Component } from 'react';

export default class RegisterBusiness extends Component {
    state = {
      username: '',
      contact_name: '',
      business_name:'',
      address:'',
      password: '',
      phone:'',
      user_type: 'business',
      email: ''
    };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
    this.props.history.push('/login');
  
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.onSubmit}>
            <h1>Sign up!</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact_name">Full Name</label>
              <input
                type="text"
                name="contact_name"
                value={this.state.contact_name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="business_name">Business</label>
              <input
                type="text"
                name="business_name"
                value={this.state.business_name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

