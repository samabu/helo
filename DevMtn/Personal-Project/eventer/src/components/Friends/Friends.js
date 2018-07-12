import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../ducks/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Friends extends Component {

    componentDidMount() {
        axios.get('/api/friends').then(res => {            
            this.props.getFriends(res.data)
        })
    }

    mapFriends() {
        let key = 0;
        let friendsToDisplay = this.props.user.friends.map( (e) => {
            return(
                <div key={ key++ }>
                    { e.username }<br/>
                    <img src={ e.profile_pic } alt="friend"/><br/>
                </div>
            )})
        return friendsToDisplay;
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/addfriend"><button>ADD NEW FRIEND</button></Link>
                    <Link to="/friendrequests"><button>SEE FRIEND REQUESTS</button></Link>
                </div>
                <div>
                    Friends ({ this.props.user.friends.length }):<br/>
                    { this.mapFriends() }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default connect( mapStateToProps, { getFriends })(Friends);