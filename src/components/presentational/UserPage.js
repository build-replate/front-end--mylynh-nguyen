import React, { Component } from 'react';
import { fetchAllUsers } from '../../actions';
import { connect } from 'react-redux';
import UserList from './UserList'

class UserPage extends Component {

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    render() {
        return (
            <div>
              <UserList users={this.props.users} />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        users: state.user.users
    }
}
export default connect(mapStateToProps, {fetchAllUsers})(UserPage);

