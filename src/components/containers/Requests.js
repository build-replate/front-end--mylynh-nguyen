import { connect } from 'react-redux';
import Requests from '../presentation/Requests';

function mapStateToProps(state) {
    return state.request
}

export default connect(mapStateToProps(), {})(Requests)