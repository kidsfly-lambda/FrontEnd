// controlled component form for signing up a new user

import React from 'react'

class UserForm extends React.Component {
    state = {
        signup: {
            name: '',
            address: '',
            email: '',
            username: '',
            password: ''
        }
      };

      handleLogin = e => {
        e.preventDefault();
        this.props
          .login(this.state.signup)
          .then(() => this.props.history.push("/user"));
      };
    
    
      handleChange = e => {
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
            <form onSubmit={this.handleLogin}>
                <label for='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={this.state.signup.name}
                  onChange={this.handleChange} 
                  />

                <label for='address'>Address</label>
                <input
                  type='text'
                  name='address'
                  placeholder='Address'
                  value={this.state.signup.address}
                  onChange={this.handleChange} 
                  />

                <label for='email'>Email</label>
                <input
                  type='text'
                  name='email'
                  placeholder='E-Mail'
                  value={this.state.signup.email}
                  onChange={this.handleChange} 
                  />

                <label for='username'>UserName</label>
                <input
                  type='text'
                  name='username'
                  placeholder='UserName'
                  value={this.state.signup.username}
                  onChange={this.handleChange} 
                  />


                <label for='username'>PassWord</label>
                <input
                  type='text'
                  name='password'
                  placeholder='Password'
                  value={this.state.signup.password}
                  onChange={this.handleChange} 
                  />    

                  <button>Submit</button>

            </form>
        </div>
          )
      }
}


export default UserForm