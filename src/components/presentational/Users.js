import React, { Component } from 'react';
import { fetchAllUsers } from '../../actions';
import { connect } from 'react-redux';

class Users extends Component {

    componentDidMount(){
        this.props.fetchAllUsers();
        console.log(this.props);
    }

    render() {
        return (
            <div>
               hello
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        // users: state.requests.requests,
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps, {fetchAllUsers})(Users);

