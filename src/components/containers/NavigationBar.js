import NavigationBar from '../presentational/NavigationBar';

import { connect } from 'react-redux';
import { logout } from '../../actions';
// TODO: import the rest of the action creators from the actions folder


function mapStateToProps(state) {
  return state.auth
}


export default connect(
  mapStateToProps,
  { logout }
)(NavigationBar);