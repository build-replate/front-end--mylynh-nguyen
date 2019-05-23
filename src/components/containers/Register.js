import Register from '../presentational/Register';

import { connect } from 'react-redux';
import { registerUser } from '../../actions';
import { withRouter } from 'react-router-dom';


export default withRouter(connect(null, { registerUser })(Register));