import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import NavigationBar from './components/NavigationBar';
import requireAuth from './components/requireAuth';


export default class App extends Component {
  render(){
    return(
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
              <Route path='/login' component={LoginForm} />
              <Route path='/signup' component={Signup} />
              <Route path='/welcome' component={requireAuth(Welcome)} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
          </div>
        </BrowserRouter>)
  }
}