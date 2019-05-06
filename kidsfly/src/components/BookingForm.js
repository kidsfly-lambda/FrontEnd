import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUsers } from '../actions'
// import axios from 'axios'

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flight: {
                airport: '',
                airline: '',
                departure: '',
                numberOfKids: ''
            }
        }
    }

    addUsers = event => {
        event.preventDefault();
        this.props.addUsers(this.state.flight);
        this.setState({
            flight: {
                airport: '',
                airline: '',
                departure: '',
                numberOfKids: ''
            }

        });
    };

    handleInputChange = e => {
        this.setState({
            flight: {
                ...this.state.flight,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return ( <
            div className = "BookingForm" >
            <
            form onSubmit = { this.addFlight } >
            <
            input onChange = { this.handleInputChange }
            placeholder = "name"
            value = { this.state.flight.airport }
            name = "airport" /
            >
            <
            input onChange = { this.handleInputChange }
            placeholder = "airplane"
            value = { this.state.flight.airplane }
            name = "airplane" /
            >
            <
            input onChange = { this.handleInputChange }
            placeholder = "departure"
            value = { this.state.flight.departure }
            name = "departure" /
            >

            <input 
            onChange = { this.handleInputChange }
            placeholder = "Number Of Kids"
            value = { this.state.flight.numberOfKids }
            name = "numberOfKids" />

            <button type = "submit" > Add Flight </button> 
            </form> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps, { addUsers })(BookingForm)