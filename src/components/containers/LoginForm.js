import LoginForm from '../presentational/LoginForm';

// we do not want any state mapped to props, so let's make that first parameter to connect `null`
import { compose } from 'redux'
import { connect } from 'react-redux';
import { login } from '../../actions';
import { withRouter } from 'react-router-dom';



export default compose(
    withRouter,
    connect(null, { login })
)(LoginForm)