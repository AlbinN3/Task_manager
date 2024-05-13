import React, { Component } from 'react';
import undraw_profile from '../assets/img/undraw_profile.svg';
import {  BrowserRouter, NavLink as Link, Route, Routes } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userid:''
        };
    }
    componentDidMount(){
        this.setState({ userName: sessionStorage.getItem("userName")});
        this.setState({userid: sessionStorage.getItem("userId")});
    }
    handleViewChange(e,userid){
        localStorage.setItem("userId",userid);
        window.location.href="/profile"
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <ul className="navbar-nav ml-auto">
                        <div className="topbar-divider d-none d-sm-block"></div>
                        {/* Nav Item - User Information */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" onClick={evt => this.handleViewChange(evt, this.state.userid)} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.state.userName}</span>
                                <img className="img-profile rounded-circle" src={undraw_profile} />
                            </a>
                        </li>
                    </ul>
                    {/* End of Topbar */}
                </nav>
            </div>
        );
    }
}
export default Header;