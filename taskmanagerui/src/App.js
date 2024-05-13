import React, { Component } from 'react';
import './App.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/css/sb-admin-2.min.css';
import Dashboard from './components/Dashboard.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:"",
          userName:"",
          password:"",
        };
    }  
    componentDidMount(){
        
    }
    render() {
        return (
            <Dashboard/>
        )
    }
}

export default App;
