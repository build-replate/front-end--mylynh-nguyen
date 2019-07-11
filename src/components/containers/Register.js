import Register from '../presentational/Register';

import { connect } from 'react-redux';
import { registerUser } from '../../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return state.auth
}

export default withRouter(connect(mapStateToProps, { registerUser })(Register));