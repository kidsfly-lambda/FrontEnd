
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
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  background-size: cover;
  height: 100vh;
  justify-content: center;
   
}
  form {
    display: flex;
    max-width: 60%;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    align-items: center;
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


export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.state.user && this.state.pass)
      this.props.findUser({
        username: this.state.user,
        password: this.state.pass
      });
    else this.setState({ err: "Please fill out all forms" });
  };
  render() {
    return (
      <SignupStyle>
      <div className="form_container">
        <form onSubmit={this.handleSubmit} className="login">
          <h2 className="login_title">Log In</h2>
          {this.state.err && (
            <div className="login_error">
              <div className="login_error_text">{this.state.err}</div>
            </div>
          )}
          <input
            className="login_input"
            type="text"
            data-name="user"
            placeholder="Username"
            value={this.state.user}
            onChange={this.handleChange}
            required
          />
          <input
            className="login_input"
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
            className="login_button"
          >
            Log In
          </button>
          <Link className="login_signupContainer" to="/signup">
            <div className="login_signup">Sign Up</div>
          </Link>
        </form>
        
      </div>
      </SignupStyle>
    );
  }
}