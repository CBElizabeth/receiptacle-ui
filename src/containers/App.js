import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/App.css';
import '../styles/index.css';
import NavigationBar from '../components/navigationBar';
import Home from '../components/home.js';
import Login from '../components/login.js';
import Block from '../components/block.js';
import Receipts from "../components/receipts";
import Settings from "../components/settings";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="app-header">
                        <NavigationBar />
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/block" component={Block} />
                        <Route path="/receipts" component={Receipts} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/login" component={Login} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


//todo: add keyboard and swipe navigation