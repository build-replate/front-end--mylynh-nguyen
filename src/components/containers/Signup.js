import Signup from '../presentational/Signup';

import { connect } from 'react-redux';
import { signup } from '../../actions';
import { withRouter } from 'react-router-dom';


export default withRouter(connect(null, { signup })(Signup));