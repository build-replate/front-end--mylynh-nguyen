import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import LoginForm from './components/containers/LoginForm';
import Register from './components/containers/Register';
import RegisterBusiness from './components/containers/RegisterBusiness';
import Welcome from './components/presentational/Welcome';
import NavigationBar from './components/containers/NavigationBar';
import authenticate from './components/higher-order/authenticate';
import Home from './components/presentational/Home'

export default class App extends Component {
  render(){
    return(
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
              <Route path='/login' component={LoginForm} />
              <Route path='/register-business' component={RegisterBusiness} />
              <Route path='/register' component={Register} />
              <Route path='/welcome' component={authenticate(Welcome)} />
              <Route path='/home' component={authenticate(Home)} />
              <Route render={() => <h3>Must Login</h3>} />
            </Switch>
          </div>
        </BrowserRouter>)
  }
}