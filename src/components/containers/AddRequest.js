import AddRequest from '../presentational/AddRequest';

import { connect } from 'react-redux';
import { addRequest } from '../../actions';
import { withRouter } from 'react-router-dom';


export default withRouter(connect(null, { addRequest })(AddRequest));