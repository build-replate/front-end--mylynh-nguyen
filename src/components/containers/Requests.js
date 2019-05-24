import { connect } from 'react-redux';
import Requests from '../presentational/Requests';
import {deleteRequest} from '../../actions';



export default connect(null, {deleteRequest})(Requests);