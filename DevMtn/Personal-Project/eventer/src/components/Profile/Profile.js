import React, { Component } from 'react';
import { getUserData } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {

    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            this.props.getUserData(res.data)
        })
    }

    render() {
        let { user } = this.props;
        return (
            <div>
            Profile!<br/>
            <img src={ user.profile_pic } alt="prof"/><br/>
            Username:<br/>
            { user.username }<br/>
            Email:<br/>
            { user.email }<br/>
            Zipcode:<br/>
            { user.zipcode }<br/>
            <Link to="/edit"><button>EDIT PROFILE</button></Link>
            </div>
        );
    }
  }

  function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserData })(Profile)