import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupStyle = styled.div `
height: 800px;
background-color: rgb(76, 92, 150);
background-color: rgb(46, 49, 65);
background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgb(76, 92, 150));
background-size: auto, cover;
// background-image: url("https://46gb9l10qld536ktv928ai60-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/kid-airport.jpg
// ");
//   background-size: cover;
position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 20px;
  align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
  .form_container {
  background-size: cover;
  height: 100vh;
  justify-content: center;
}
  form {
    display: flex;
    max-width: 60%;
    width: 300px;
    margin: 0 auto;
    
    background: rgb(46, 49, 65);
    opacity: 1.0;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
  }
  body{
   
  }

  input {
    display: flex;
  flex-direction: column;
  margin-right: 4%;
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #c5ecfd;
  padding: 10px;
  color: #c5ecfd;
  width: 100%;
  
  
  }

  button {
    background: rgb(76, 92, 150);
    text-align: center;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fName: "",
      lName: "",
      user: "",
      pass: "",
      err: null
    };
  }
  componentDidMount() {
    this.setState({ err: this.props.err });
  }
  handleChange = e =>
    this.setState({
      [e.target.dataset.name]: e.target.value
    });
  handleSubmit = e => {
    e.preventDefault();
    if (
      !this.state.pass ||
      !this.state.user ||
      !this.state.email ||
      !this.state.fName ||
      !this.state.lName
    ) {
      this.setState({ err: "Please fill out all forms" });
    } else if (this.state.pass.length < 8) {
      this.setState({
        err:
          "Password must be 8 characters long, contain 1 special character, 1 lowercase letter , and 1 uppercase letter"
      });
    } else if (!/[a-z]/.test(this.state.pass)) {
      this.setState({
        err:
          "Password must be 8 characters long, contain 1 special character, 1 lowercase letter , and 1 uppercase letter"
      });
    } else if (!/[A-Z]/.test(this.state.pass)) {
      this.setState({
        err:
          "Password must be 8 characters long, contain 1 special character, 1 lowercase letter , and 1 uppercase letter"
      });
    } else if (!/\d/.test(this.state.pass)) {
      this.setState({
        err:
          "Password must be 8 characters long, contain 1 special character, 1 lowercase letter , and 1 uppercase letter"
      });
    } else if (this.state.user && this.state.pass) {
      this.props.addUser({
        password: this.state.pass,
        username: this.state.user,
        Firstname: this.state.fName,
        Lastname: this.state.lName,
        email: this.state.email,
        admin: false
      });
    } else this.setState({ err: "The username or email has been taken." });
  };
  render() {
    return (
      <div className="form_container">
      <SignupStyle>
        <form onSubmit={this.handleSubmit} className="signup">
          {/* <h2 className="signup_title">Sign Up</h2> */}
          {this.state.err && (
            <div className="login_error">
              <div className="login_error_text">{this.state.err}</div>
            </div>
          )}
          <div className='inputs'></div>
          <input
            className="signup_input"
            type="email"
            data-name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            className="signup_input"
            type="text"
            data-name="fName"
            placeholder="First Name"
            value={this.state.fName}
            onChange={this.handleChange}
            required
          />
          <input
            className="signup_input"
            type="text"
            data-name="lName"
            placeholder="Last Name"
            value={this.state.lName}
            onChange={this.handleChange}
            required
          />
          <input
            className="signup_input"
            type="text"
            data-name="user"
            placeholder="Username"
            value={this.state.user}
            onChange={this.handleChange}
            required
          />
          <input
            className="signup_input"
            type="password"
            data-name="pass"
            placeholder="Password"
            value={this.state.pass}
            onChange={this.handleChange}
            required
          />
          <button
            onSubmit={this.handleSubmit}
            onClick={this.handleSubmit}
            className="signup_button"
          >
            Sign Up
          </button>
          <div className='fa'></div>
          <Link className="signup_loginContainer" to="/login">
            <div className="signup_login">Log In</div>
          </Link>
        </form>
        </SignupStyle>
      </div>
      
    );
  }
}