import React from 'react';
import UserForm from './components/UserForm';
import Login from './components/Login';
import BookingForm from './components/BookingForm';
import Flights from '../src/containers/Flights';
import { Route , withRouter} from 'react-router-dom';
import './App.css';
import AdminForm from './components/AdminForm';

// function App() {
//   return (
//     <div className="App">
//         <Route path='/home' component={UserForm} />
//         <Route exact path='/' component={BookingForm}/> 

//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      firstName: "Louis",
      lastName: "Magdaleno",
      loginErr: null,
      signUpErr: null,
      ready: false
    };
  }


  signOut = _ => {
    localStorage.clear();
    this.setState({ user: null });
  };
  render() {
    return (
    
        <Route
          exact
          path="/"
          component={props => (
            <Login
              user={this.state.user}
              history={props.history}
              
            />
          )}
        />
    )}
        
  
}


export default withRouter(App);
