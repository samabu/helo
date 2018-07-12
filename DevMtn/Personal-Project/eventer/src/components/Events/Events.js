import React, { Component } from 'react';
import axios from 'axios';

class Events extends Component {
    constructor() {
        super();

        this.state = {
            eventsToDisplay: []
        }
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        axios.get('/api/events').then( results => {
            this.setState({ eventsToDisplay: results.data });
        })
    }

    mapEvents = () => {
        let key = 0;
        let eventsToShow = this.state.eventsToDisplay.map( (e) => {
            return (
                <div key={key++}>
                    {"Event Name: "}
                    { e.event_name }<br/>
                    {"Event Host: "}
                    { e.username }<br/>
                    <button>GO TO EVENT</button>
                </div>
            )
        })
        return eventsToShow;
    }

    render() {
        return (
            <div>
                <h1>EVENTS: </h1><br/>
                { this.mapEvents() }
            </div>
        )
    }
}

export default Events;