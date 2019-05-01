// dumb component for displaying a flight




import React from 'react'
import BookingForm from './BookingForm'

const input = [{
    airport: 'jfk',
    airline: 'american airlines',
    departure: '6:45 am',
    numberOfKids: 3
}]


class Flight extends React.Component {
    constructor() {
      super();
      this.state = {
        input: input,
        airport: '',
        airline: '',
        departure: '',
        numberOfKids: ''
      };
    }
  
    inputHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    addItemHandler = event => {
      event.preventDefault();
      this.setState(prevState => {
        return {
          input: [
            ...input,
            {
             airport: this.state.airport,
             airline: this.state.airline,
             departure: this.state.departure,
             numberOfKids: this.state.numberOfKids
            }
          ],
          airport:'',
          airline: '',
          departure: '',
          numberOfKids:'',
        };
      });
    };
  
    render() {
      return (
        <div className="flight-list">
          <div className="header">
            <h1>Flight List</h1>
          </div>
          <div>
          <BookingForm
            airport={this.state.airport}
            airline={this.state.airline}
            departure={this.state.departure}
            numberOfKids={this.state.numberOfKids}
            inputHandler={this.inputHandler}
            addItemHandler={this.addItemHandler}
          />
          <p>{this.state.airline}</p>
          </div>
          <button></button>
        </div>
      );
    }
  }

