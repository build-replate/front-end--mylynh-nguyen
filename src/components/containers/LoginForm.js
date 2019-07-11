import LoginForm from '../presentational/LoginForm';


// we do not want any state mapped to props, so let's make that first parameter to connect `null`
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser, logout } from '../../actions';
// TODO: import the rest of the action creators from the actions folder

const mapStateToProps = state => {
    return state.auth
}

export default compose(
    withRouter,
    connect(mapStateToProps, { loginUser, logout })
)(LoginForm)