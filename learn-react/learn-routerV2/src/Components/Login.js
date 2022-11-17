import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.username)
        console.log(this.state.password)
        var { username, password } = this.state
        if ( username === "admin" && password === "admin") {
            localStorage.setItem('user', JSON.stringify({
                username : username,
                password : password
            }))
        }
    }

    render() {

        var login = localStorage.getItem('user')
        if (login !== null)
        {
            return <Redirect to ='/products'/>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form action="" method="POST" role="form" onSubmit = { this.onSubmit }>
                            <legend>Đăng nhập</legend>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name = "username" value = { this.state.username } onChange = { this.onChange }/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name = "password" value = { this.state.password } onChange = { this.onChange }/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

// app là cái chính, bao bọc các components nhỏ ở bên trong