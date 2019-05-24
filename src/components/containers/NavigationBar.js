import NavigationBar from '../presentational/NavigationBar';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import { withRouter } from 'react-router-dom';

// TODO: import the rest of the action creators from the actions folder


function mapStateToProps(state) {
  return state.auth
}

export default compose(
  withRouter,
  connect(mapStateToProps, { logout })
)(NavigationBar)

