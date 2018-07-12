import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
      return (
        <div>
            <nav className="nav_bar">
                <Link to="/dashboard"><button>HOME</button></Link>
                <Link to="/profile"><button>PROFILE</button></Link>
                <Link to="/friends"><button>FRIENDS</button></Link>
                <Link to="/events"><button>EVENTS</button></Link>
                <Link to="/"><button>LOGOUT</button></Link>
            </nav>
        </div>
      );
    }
  }

export default Nav;