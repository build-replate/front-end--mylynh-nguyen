import React, { Component } from 'react';
import './LoginForm.css';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
      setTimeout(() => {   
       if(this.props.currentUser !== null) {
       this.props.history.push('/welcome');
        } 
      }, 3000);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      
  <form onSubmit={this.onSubmit}>
  <div className="form-group">
        <label>Username</label>
        <input className="form-control" type="text" name="username" value={username} onChange={this.onChange} placeholder="password" />
     </div>
     <div className="form-group">
        <label>Password</label>
        <input className="form-control" type="password" name="password" value={password} onChange={this.onChange} placeholder="password" />
     </div>
     <button type="submit" className="btn btn-black">Login</button>

  </form> 
      );
    }
  }
  
