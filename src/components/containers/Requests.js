import { connect } from 'react-redux';
import Requests from '../presentational/Requests';
import {deleteRequest, fetchUserById} from '../../actions';

const mapStateToProps = state => {
    return state.auth
}


export default connect(mapStateToProps, {fetchUserById,deleteRequest})(Requests);