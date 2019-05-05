// controlled component for adding a new Airport Admin

import React from 'react'
import { connect } from "react-redux";
import { addUsers } from '../actions'

class AdminForm extends React.Component {
    state = {
        signup: {
            name: '',
            address: '',
            email: '',
            username: '',
            password: '',
            location: ''
        }
      };


      handleSignup = e => {
        e.preventDefault();
        this.props
          .addUsers(this.state.signup);
          this.setState({
            signup: {
              name: '',
              address: '',
              email: '',
              username: '',
              password: '',
              location: ''
            }
          })
        
      };
    
      inputHandleSignup = e => {
        this.setState({
          signup: {
            ...this.state.signup,
            [e.target.name]: e.target.value
          }
        });
      };


      render() {
        return(
        <div className='signup-form'>
            <form onSubmit={this.handleSignup}>
                <label for='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={this.state.signup.name}
                  onChange={this.inputHandleSignup} 
                  />

                <label for='address'>Address</label>
                <input
                  type='text'
                  name='address'
                  placeholder='Address'
                  value={this.state.signup.address}
                  onChange={this.inputHandleSignup} 
                  />

                <label for='email'>Email</label>
                <input
                  type='text'
                  name='email'
                  placeholder='E-Mail'
                  value={this.state.signup.email}
                  onChange={this.inputHandleSignup} 
                  />

                <label for='username'>UserName</label>
                <input
                  type='text'
                  name='username'
                  placeholder='UserName'
                  value={this.state.signup.username}
                  onChange={this.inputHandleSignup} 
                  />


                <label for='username'>PassWord</label>
                <input
                  type='text'
                  name='password'
                  placeholder='Password'
                  value={this.state.signup.password}
                  onChange={this.inputHandleSignup} 
                  />    


                <label for='location'>Location</label>
                <input
                  type='text'
                  name='location'
                  placeholder='Location'
                  value={this.state.signup.location}
                  onChange={this.inputHandleSignup} 
                  />    


                  <button>Submit</button>

            </form>
        </div>
          )
      }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};


export default connect(
  mapStateToProps,
  { addUsers }
)(AdminForm);


