import React, {Component} from 'react';
import {Provider} from 'react-redux';
import SampleClassComponent from './components/SampleClassComponent';
import CandidateListContainer from './containers/CandidateListContainer'

import logo from './logo.svg';

import './App.css';

// TODO: In order to use React-redux, use Provider, and createStore

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <CandidateListContainer />
            </div>
        );
    }
}

export default App;
