// a container component for displaying flights that individual user has scheduled
import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class Flights extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            {this.props.users.map((flight) =>
                <div>
                    <h3>{flight.airport}</h3>
                    <h3>{flight.airline}</h3>
                    <h3>{flight.departure}</h3>
                    <h3>{flight.numberOfKids}</h3>
                </div>
            )}
        </div> 
        )
    }
}

    const mapStateToProps = state => {
        return {
            users: state.users,
            fetchUsers: state.fetchUsers
        }
    }


    export default connect(mapStateToProps, { fetchUsers })(Flights)