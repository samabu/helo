import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Profile_Editor from './components/Profile_Editor/Profile_Editor';
import Friends from './components/Friends/Friends';
import Friend_Adder from './components/Friend_Adder/Friend_Adder';
import Friend_Requests from './components/Friend_Requests/Friend_Requests';
import Event_Creator from './components/Event_Creator/Event_Creator';
import Event_Inviter from './components/Event_Inviter/Event_Inviter';

export default (
    <Switch>
        <Route path="/" component={ Login } exact />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/profile" component={ Profile } />
        <Route path="/edit" component={ Profile_Editor } />
        <Route path="/friends" component={ Friends } />
        <Route path="/addfriend" component={ Friend_Adder } />
        <Route path="/friendrequests" component={ Friend_Requests } />
        <Route path="/event" component={ Event_Creator } />
        <Route path="/eventinviter" component={ Event_Inviter } />
    </Switch>
)