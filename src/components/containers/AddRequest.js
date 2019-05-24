import AddRequest from '../presentational/AddRequest';

import { connect } from 'react-redux';
import { addRequest } from '../../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return state.auth
}

export default withRouter(connect(mapStateToProps, { addRequest })(AddRequest));