import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateInfo } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
    }

    updateUsername = (input) => {
        this.setState( { username: input } )
    }

    updatePassword = (input) => {
        this.setState( { password: input } )
    }

    register = () => {
        axios.post('/api/auth/register', this.state).then(res => this.props.updateInfo(res.data.id, res.data.username))
    }

    login = () => {
        axios.post('/api/auth/login', this.state).then(res => this.props.updateInfo(res.data.id, res.data.username))
    }

    render() {
        return (
            <div>
                Username: <br/>
                <input onChange={ (e) => this.updateUsername(e.target.value) } type="text" /> <br/>
                Password: <br/>
                <input onChange={ (e) => this.updatePassword(e.target.value) } type="text" /><br/>
                <Link to="/dashboard"><button onClick={ this.login }>Login</button></Link>
                <Link to="/dashboard"><button onClick={ this.register }>Register</button></Link>
            </div>
        )
    }
}

export default connect(null, { updateInfo })( Auth );