import React, { Component } from 'react';
import Requests from './Requests';
import { fetchAllRequests } from '../../actions';
import { connect } from 'react-redux';

export class Welcome extends Component {

    componentDidMount(){
        this.props.fetchAllRequests();
    }

    render() {
        return (
            <div>
               <Requests requests={this.props.requests} />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        requests: state.requests.requests,
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps, {fetchAllRequests})(Welcome);

