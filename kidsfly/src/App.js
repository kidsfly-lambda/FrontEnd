import React from 'react';
import UserForm from './components/UserForm'
import BookingForm from './components/BookingForm'
import Flights from '../src/containers/Flights'
import { Route } from 'react-router-dom'
import './App.css';
import AdminForm from './components/AdminForm';

// function App() {
//   return (
//     <div className="App">
//         {/* <Route path='/home' component={UserForm} />
//         <Route exact path='/' component={BookingForm}/> */}

// <BookingForm />
// <Arrivals />
//     </div>
//   );
// }


class App extends React.Component {
  render() {
    return(
      <>
      <AdminForm />
      <BookingForm />
      <Flights />
      </>
    )
  }
}

export default App;
