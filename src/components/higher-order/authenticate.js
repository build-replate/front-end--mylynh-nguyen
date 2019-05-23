import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComponentToBeRendered) {

  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.loggedIn) {
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.loggedIn) {
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <ComponentToBeRendered {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      loggedIn: state.loggedIn
    };
  }

  return withRouter(connect(mapStateToProps)(Authenticate))}