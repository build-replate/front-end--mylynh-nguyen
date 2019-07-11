import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import LoginForm from './components/presentational/LoginForm';
import Register from './components/presentational/Register';
import Welcome from './components/presentational/Welcome';
import NavigationBar from './components/presentational/NavigationBar';
import authenticate from './components/higher-order/authenticate';
import UserPage from './components/presentational/UserPage';
import AddJoke from './components/presentational/AddJoke';
import Home from './components/presentational/Home';

export default class App extends Component {
  render(){
    return(
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
              <Route path='/login' component={LoginForm} />
              <Route path='/register' component={Register} />
              <Route path='/add-joke' component={AddJoke} />
              <Route path='/welcome' component={authenticate(Welcome)} />
              <Route path='/users' component={UserPage} />
              <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>)
  }
}