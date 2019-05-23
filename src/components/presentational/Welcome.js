import React, { Component } from 'react';
import Requests from './Requests';
import { fetchAllRequests } from '../../actions';
import { connect } from 'react-redux';

export class Welcome extends Component {

    componentDidMount(){
        this.props.fetchAllRequests()
    }

    render() {
        return (
            <div>
               <Requests requests={this.props.requests} />
               Welcome
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        requests: state.requests.requests
    }
}
export default connect(mapStateToProps, {fetchAllRequests})(Welcome);

