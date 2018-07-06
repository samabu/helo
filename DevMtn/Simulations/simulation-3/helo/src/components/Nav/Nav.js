import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


export function Nav(props) {
        let { username, profile_pic } = props;
    return (
        <div>
            <h1>Username: </h1><br/>
            <div>{ username }</div><br/>
            <div><img src={ profile_pic } alt="profile here"/></div><br/>
            <Link to="/dashboard"><button>Home</button></Link>
            <Link to="/new"><button>New Post</button></Link>
            <Link to="/"><button>Logout</button></Link>
        </div>
    )
}

function mapStateToProps(state) {
    const { username, profile_pic } = state;

    return { username, profile_pic }
}

export default connect( mapStateToProps)( Nav );
