import React from 'react';
import UserForm from './components/UserForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BookingForm from './components/BookingForm';
import Flights from '../src/containers/Flights';
import { Route , withRouter, Switch} from 'react-router-dom';
import './App.css';
import AdminForm from './components/AdminForm';
import axios from 'axios';
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
      ready: false,
      loggedIn: false
    };
  }

   addUser = user => {
    // add a user
    axios({
            method: "post",
            url: "https://kidsfly.herokuapp.com/register",
            data: user
        })
        .then(res => {
            this.setState({ users: res.data });
            localStorage.setItem("user", res.data);
            this.props.history.push("/");
        })
        .catch(err =>
            this.setState({
                err: "There was an issue signing up. Email or username may be taken."
            })
        )
}

  findUser = user =>
    // find a user
    axios
      .post('https://kidsfly.herokuapp.com/login', user)
      .then(res => {
        this.setState({ user: res.data });
        localStorage.setItem("user", res.data);
        this.props.history.push("/bookingform");
        
        
      })
      .catch(err =>
        this.setState({
          loginErr:
            "There was an issue logging in. Check username/password or sign up if you haven't"
        })
      );
  
  signOut = _ => {
    localStorage.clear();
    this.setState({ user: null });
  };
  render() {
    return (
      <>
      
          <Route
          
          path="/login"
          component={_ => (
            <Login err={this.state.loginErr}  findUser={this.findUser} />
          )}
        />
          <Route
          
          path="/"
          component={_ => (
            <Login loggedIn={this.state.loggedIn} findUser={this.findUser} />
          )}
        />
     
      
       
    
    <Route
    exact
    path="/signup"
    component={_ => (
      <SignUp err={this.state.signUpErr} addUser={this.addUser} />
    )}
  />

    <Route 
    exact
    path="/bookingform"
    component={_ => (
      <BookingForm loggedIn={this.state.loggedIn} addUser={this.addUser} />
    )}
    />
  </>
    
    )}
        
  
}


export default withRouter(App);
