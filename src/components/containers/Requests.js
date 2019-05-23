import { connect } from 'react-redux';
import Requests from '../presentational/Requests';

function mapStateToProps(state) {
    return state.request
}

export default connect(mapStateToProps(), {})(Requests)