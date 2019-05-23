import NavigationBar from '../presentational/NavigationBar';

import { connect } from 'react-redux';
import { logout } from '../../actions';


function mapStateToProps(state) {
  return state.auth
}


export default connect(
  mapStateToProps,
  { logout }
)(NavigationBar);