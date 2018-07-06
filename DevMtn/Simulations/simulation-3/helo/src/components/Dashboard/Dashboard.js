import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            userposts: true,
            posts: [],
            search: ''
        }
    }

    mapPosts = () => {
        let postsToShow = this.state.posts.map( (e, i) => {
            return (
                <div key={i}>
                    { e.title }<br/>
                    { e.author_username }<br/>
                    <img src={ e.profile_pic } alt="author pic"/><br/>
                </div>
            )
        })
        return postsToShow; 
    }

    search = () => {
        axios.get(`/api/posts?userposts=${this.state.userposts}&search=${this.state.search}`).then( res => {
            this.setState({ posts: res.data })
        })
    }

    updateSearchVal = (input) => {
        this.setState({ search: input })
    }

    render() {
        return (
            <div>
                <h1>Search: </h1>
                <input onChange={ (e) => this.updateSearchVal(e.target.value) } type="text"/>
                <button onClick={ this.search }>Search</button>
                <button>Reset</button>
                Show My Posts? <input  type="checkbox"/>
                { this.mapPosts() }
            </div>
        )
    }
}

export default Dashboard;