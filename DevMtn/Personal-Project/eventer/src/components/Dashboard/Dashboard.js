import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            this.props.getUserData(res.data);
        })
    };

    componentDidUpdate(prevProps) {
        let flag = false;
        for (const prop in this.props) {
            if (this.props[prop] !== prevProps[prop]) {
                flag = true;
            }
        }
        if (flag) {
            axios.get('/api/user-data').then(res => {
                this.props.getUserData(res.data)
            })
        }
    }

    logout() {
        axios.get('/api/logout')
    };

    render() {
    
    let { user } = this.props;
      return (
        <div>
            <div>
                <img src={ user.profile_pic } alt="prof"/><br/>
                { user.username }<br/>
            </div>
            <Link to="/event"><button>CREATE NEW EVENT</button></Link>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserData })(Dashboard)