import React, { Component } from 'react';
import './App.css';
import LoginCode from './component/LoginCode';
import WrappedNormalLoginForm from "./component/Login";

class App extends Component {
    render() {
        return (
            <div className="App">
                <LoginCode />
                <WrappedNormalLoginForm />
            </div>
        );
    }
}

export default App;