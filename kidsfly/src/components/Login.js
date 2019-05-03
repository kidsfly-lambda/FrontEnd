import React from 'react'

class Login extends React.Component {
    state = {
        login: {
            username: '',
            password: ''
        }
    }


    handleInput = e => {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        })
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.login(this.state.login)
        this.setState({
            login: {
                username: '',
                password: ''
            }
        })


    }


    render() {
        return ( <
            form onSubmit = { this.handleLogin } >
            <
            h3 > UserName: < /h3> <
            input type = 'text'
            name = 'username'
            placeholder = 'UserName'
            value = { this.state.login.username }
            onChange = { this.handleInput }
            />

            <
            h3 > Password: < /h3> <
            input type = 'text'
            name = 'password'
            placeholder = 'Password'
            value = { this.state.login.password }
            onChange = { this.handleInput }
            /> <
            /form>
        )
    }

}


export default Login