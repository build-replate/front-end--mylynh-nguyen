import React, { Component } from 'react';



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
<div>
      <div class="sidenav">
         <div class="login-main-text">
            <h2>Application Login Page </h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={this.onSubmit}>
               <div class="form-group">
                     <label>Username</label>
                     <input className="form-control" type="text" name="username" value={username} onChange={this.onChange} placeholder="password" />
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input className="form-control" type="password" name="password" value={password} onChange={this.onChange} placeholder="password" />
                  </div>
                  <button type="submit" className="btn btn-black">Login</button>
  
               </form>
            </div>
         </div>
      </div>
      </div>
      );
    }
  }
      /* <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.onSubmit}>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value={username} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" id="password" name="password" value={password} onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div> */
    

