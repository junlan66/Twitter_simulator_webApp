import React from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MainPage from './components/main-page';
import BookmarkComponent from './components/bookmark';
import Dashboard from './components/Dashboard';
import TwitterHome from "./components/TwitterHome";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import IndividiualTweetView from "./components/IndividiualTweetView";
import Messages from "./components/Messages/Messages";
import Deactivate from "./components/Deactivate/Deactivate";
import DeactivatedPage from "./components/Deactivate/DeactivatedPage";
import followers from "./components/followers";
import Newcomponentforsearch from './components/Newcomponentforsearch';
import { Redirect } from 'react-router';
function App() { 
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={() => (
            <Redirect to="/Login"/>
        )}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/tweet/:tweetId" component={IndividiualTweetView} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/bookmark" component={BookmarkComponent} />
        <Route path="/TwitterHome" component={TwitterHome} />
        <Route path="/Login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Message" component={Messages} />
        <Route path="/Deactivate" component={Deactivate} />
        <Route path="/DeactivatedPage" component={DeactivatedPage} />
         <Route path="/followers" component={followers} />
         <Route path="/Newcomponentforsearch" component={Newcomponentforsearch} />
      </Switch>
    </div>
  );
}

export default App;
