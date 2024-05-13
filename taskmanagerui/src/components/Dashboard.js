import React, { Component } from 'react';
import {  BrowserRouter, NavLink as Link, Route, Routes } from 'react-router-dom';
import '../assets/vendor/fontawesome-free/css/all.min.css';
import '../assets/css/sb-admin-2.min.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Home from './Home.js';
import ErrorPage from './ErrorPage.js';
import Login from '../components/Login.js';
import Profile from './Profile.js';

/* Admin Pages */
import AdminClientList from './admin/AdminClientList.js';

import AdminAddProjects from './admin/AdminAddProjects.js';
import AdminEditProject from './admin/AdminEditProjects.js';
import AdminViewProjects from './admin/AdminViewProject.js';
import AdminProjectsList from './admin/AdminProjectList.js';

import AdminAddUsers from './admin/AdminAddUser.js';
import AdminEditUsers from './admin/AdminEditUsers.js';
import AdminViewUsers from './admin/AdminViewUsers.js';
import AdminUserList from './admin/AdminUserList.js';

import ClientDashboard from './client/ClientDashboard.js';
import ClientViewProject from './client/ClientViewProject.js';

import ManagerUsersList from './manager/ManagerUsersList.js';
import ManagerDashboard from './manager/ManagerDashboard.js';
import ManagerViewUser from './manager/ManagerViewUser.js';
import ManagerEditUsers from './manager/ManagerEditUsers.js';
import ManagerAddUsers from './manager/ManagerAddUsers.js';

import ManagerProjectsList from './manager/ManagerProjectList.js';
import ManagerViewProject from './manager/ManagerViewProject.js';
import ManagerEditProject from './manager/ManagerEditProject.js';
import ManagerAddProjects from './manager/ManagerAddProject.js';

import TeamleaderProjectList from './teamleader/TeamleaderProjectList.js';
import TeamleaderViewProject from './teamleader/TeamleaderViewProject.js';
import TeamleaderDashboard from './teamleader/TeamleaderDashboard.js';
import TeamleaderMainTasksList from './teamleader/TeamleaderMainTasksList.js';
import TeamleaderViewMainTasks from './teamleader/TeamleaderViewMainTask.js';
import TeamleaderCreateMainTask from './teamleader/TeamleaderCreateMainTask.js';
import TeamleaderAddSubtask from './teamleader/TeamleaderAddSubtask.js';
import TeamleaderSubTaskList from './teamleader/TeamleaderSubtaskList.js';
import TeamleaderEditMainTask from './teamleader/TeamleaderEditMainTask.js';
import TeamleaderEditSubTask from './teamleader/TeamleaderEditSubTask.js';
import TeamleaderViewIssues from './teamleader/TeamleaderViewIssues.js';
import TeamleaderViewSubtask from './teamleader/TeamleaderViewSubtask.js';

import TeamleaderUsersList from './teamleader/TeamleaderUsersList.js';
import TeamleaderViewUsers from './teamleader/TeamleaderViewUser.js';
import TeamleaderEditUsers from './teamleader/TeamleaderEditUser.js';
import TeamleaderAddUsers from './teamleader/TeamleaderAddUser.js';

import DeveloperTasksList from './developer/DeveloperTasksList.js';
import DeveloperDashboard from './developer/DeveloperDashboard.js';
import DeveloperViewTasks from './developer/DeveloperViewTasks.js';
import DeveloperAddProgress from './developer/DeveloperAddProgress.js';

import TesterDashboard from './tester/TesterDashboard.js';
import TesterTasksList from './tester/TesterTasksList.js';
import TesterViewTasks from './tester/TesterViewTasks.js';
import TesterAddIssues from './tester/TesterAddIssues.js';
import TesterAddProgress from './tester/TesterAddProgress.js';
import TesterViewAllMaintask from './tester/TesterViewAllMaintask.js';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userName: "",
            password: "",
            userType: "",
            urlPath: ""
        };
        this.handleLogOutChange = this.handleLogOutChange.bind(this);
    }
    handleLogOutChange(e) {
        this.setState({ userId: "" });
        this.setState({ userName: "" });
        this.setState({ userType: "" });
        sessionStorage.setItem("userId", "");
        sessionStorage.setItem("userName", "");
        sessionStorage.setItem("userType", "");
        window.location.href ="/login"
    }
    componentDidMount() {
        this.setState({ userName: sessionStorage.getItem("userName") && sessionStorage.getItem("userName") != null ? sessionStorage.getItem("userName") : "" });
        this.setState({ userId: sessionStorage.getItem("userId") && sessionStorage.getItem("userId") != null ? sessionStorage.getItem("userId") : "" });
        this.setState({ userType: sessionStorage.getItem("userType") && sessionStorage.getItem("userType") != null ? sessionStorage.getItem("userType") : "" });
        if(this.state.userType==="teamleader")
        {
            this.props.location.urlPath ="/teamleader-dashboard"
        }
    }
    async handleMenuChange() {
        this.setState({ urlPath: this.props.location.pathname });
        this.scrollToTop();
    }

    async location() {
        return this.props.location;
    }

    async navigate(url) {
        this.props.navigate(url);
    }
    render() {
        
        if (this.state.userId === "" && this.state.userType === "") {
            return (<div>
                <Login/>
            </div>);

        }
        //Admin
         else if (this.state.userType === "admin") {
            return (
                <div id="page-top">
                    <BrowserRouter>
                        <div id="wrapper">
                            {/* Sidebar */}
                            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                                {/* Sidebar - Brand */}
                                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">Task Manager</div>
                                </a>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - Dashboard */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/dashboard" ? "active" : "inactive"} to={"/dashboard"}>
                                        <i className="fas fa-fw fa-tachometer-alt"></i>
                                        <span>Dashboard</span></Link>
                                </li>
                                <hr className="sidebar-divider my-0" />

                                
                                
                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/admin-list-client" ? "active" : "inactive"} to={"/admin-list-client"}>
                                        <i className="fas fa-fw fa-book"></i>
                                        <span>Clients</span></Link>
                                </li>

                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/admin-list-projects" ? "active" : "inactive"} to={"/admin-list-projects"}>
                                        <i className="fas fa-fw fa-folder"></i>
                                        <span>Projects</span></Link>
                                </li>
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - Tables */}
                                <li className="nav-item">
                                <Link className="nav-link" to={"/admin-list-user"}>
                                    <i className="fas fa-fw fa-table"></i>
                                    <span>Users</span></Link>
                                </li>

                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                <div className="nav-link" onClick={(evt) => this.handleLogOutChange(evt)}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Logout</span></div>
                                </li>

                                <hr className="sidebar-divider my-0" />
                                 

                                <hr className="sidebar-divider my-0" />

                            </ul>
                            

                            {/* Content Wrapper */}
                            <div id="content-wrapper" className="d-flex flex-column">

                                {/* Main Content */}
                                <div id="content">

                                    <Header />

                                    {/* Begin Page Content */}
                                    <div className="container-fluid">
                                        <Routes>
                                            <Route exact path="/dashboard" element={<Home location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/admin-list-client" element={<AdminClientList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route exact path="/profile" element={<Profile location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />

                                            <Route path="/admin-add-projects" element={<AdminAddProjects location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/admin-edit-projects" element={<AdminEditProject location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/admin-list-projects" element={<AdminProjectsList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/admin-view-projects" element={<AdminViewProjects location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />

                                            <Route path="/admin-edit-users" element={<AdminEditUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/admin-list-user" element={<AdminUserList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/admin-add-user" element={<AdminAddUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/admin-view-users" element={<AdminViewUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/404" component={ErrorPage} />
                                        </Routes>
                                    </div>

                                </div>
                                {/* End of Main Content */}

                                <Footer />

                            </div>
                            `        {/* End of Content Wrapper */}

                        </div>
                        {/* End of Page Wrapper Scroll to Top Button*/}

                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>

                        {/* Logout Modal*/}
                        <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                        <a className="btn btn-primary" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BrowserRouter>

                </div>
            );
        } else if (this.state.userType === "manager") {
            return (
                <div id="page-top">
                    <BrowserRouter>
                        <div id="wrapper">

                            {/* Sidebar */}
                            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                                {/* Sidebar - Brand */}
                                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">Task Manager</div>
                                </a>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - Dashboard */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/manager-dashboard" ? "active" : "inactive"} to={"/manager-dashboard"}>
                                        <i className="fas fa-fw fa-tachometer-alt"></i>
                                        <span>Dashboard</span></Link>
                                </li>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/manager-user-list" ? "active" : "inactive"} to={"/manager-user-list"}>
                                        <i className="fas fa-fw fa-book"></i>
                                        <span>Users</span></Link>
                                </li>

                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/manager-project-list" ? "active" : "inactive"} to={"/manager-project-list"}>
                                        <i className="fas fa-fw fa-folder"></i>
                                        <span>Projects</span></Link>
                                </li>

                              

                                <hr className="sidebar-divider my-0" />

                                

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <div className="nav-link" onClick={(evt) => this.handleLogOutChange(evt)}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </div>
                                </li>

                                <hr className="sidebar-divider my-0" />

                            </ul>

                            {/* Content Wrapper */}
                            <div id="content-wrapper" className="d-flex flex-column">

                                {/* Main Content */}
                                <div id="content">

                                    <Header />

                                    {/* Begin Page Content */}
                                    <div className="container-fluid">
                                        <Routes>
                                            <Route exact path="/profile" element={<Profile location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-user-list" element={<ManagerUsersList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-dashboard" element={<ManagerDashboard location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-view-user" element={<ManagerViewUser location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-edit-users" element={<ManagerEditUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-project-list" element={<ManagerProjectsList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-view-project" element={<ManagerViewProject location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-edit-project" element={<ManagerEditProject location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-add-users" element={<ManagerAddUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/manager-add-projects" element={<ManagerAddProjects location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/404" component={ErrorPage} />
                                            

                                        </Routes>
                                    </div>

                                </div>
                                {/* End of Main Content */}

                                <Footer />

                            </div>
                            {/* End of Content Wrapper */}

                        </div>
                        {/* End of Page Wrapper Scroll to Top Button*/}

                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>

                        {/* Logout Modal*/}
                        <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                        <a className="btn btn-primary" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BrowserRouter>

                </div>
            );
        }
        //Manager
        else if (this.state.userType === "client") {
            return (
                <div id="page-top">
                    <BrowserRouter>
                        <div id="wrapper">

                            {/* Sidebar */}
                            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                                {/* Sidebar - Brand */}
                                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">Task Manager</div>
                                </a>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - Dashboard */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/client-dashboard" ? "active" : "inactive"} to={"/client-dashboard"}>
                                        <i className="fas fa-fw fa-tachometer-alt"></i>
                                        <span>Dashboard</span></Link>
                                </li>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />



                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <div className="nav-link" onClick={(evt) => this.handleLogOutChange(evt)}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </div>
                                </li>

                                <hr className="sidebar-divider my-0" />

                            </ul>

                            {/* Content Wrapper */}
                            <div id="content-wrapper" className="d-flex flex-column">

                                {/* Main Content */}
                                <div id="content">

                                    <Header />

                                    {/* Begin Page Content */}
                                    <div className="container-fluid">
                                        <Routes>
                                        <Route exact path="/profile" element={<Profile location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/client-dashboard" element={<ClientDashboard location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/404" component={ErrorPage} />
                                            <Route path="/client-view-project" element={<ClientViewProject location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />

                                        </Routes>
                                    </div>

                                </div>
                                {/* End of Main Content */}

                                <Footer />

                            </div>
                            {/* End of Content Wrapper */}

                        </div>
                        {/* End of Page Wrapper Scroll to Top Button*/}

                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>

                        {/* Logout Modal*/}
                        <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                        <a className="btn btn-primary" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BrowserRouter>

                </div>
            );
        }
        //Teamleader
        else if (this.state.userType === "teamleader") {
            return (
                <div id="page-top">
                    <BrowserRouter>
                        <div id="wrapper">

                            {/* Sidebar */}
                            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                                {/* Sidebar - Brand */}
                                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">Task Manager</div>
                                </a>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - Dashboard */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/teamleader-dashboard" ? "active" : "inactive"} to={"/teamleader-dashboard"}>
                                        <i className="fas fa-fw fa-tachometer-alt"></i>
                                        <span>Dashboard</span></Link>
                                </li>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/teamleader-view-users" ? "active" : "inactive"} to={"/teamleader-view-users"}>
                                        <i className="fas fa-fw fa-book"></i>
                                        <span>Users</span></Link>
                                </li>

                                <hr className="sidebar-divider my-0" />
                                {/* Nav Item - client */}
                              <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/teamleader-project-list" ? "active" : "inactive"} to={"/teamleader-project-list"}>
                                        <i className="fas fa-fw fa-folder"></i>
                                        <span>Projects</span></Link>
                                </li>
                                
                                <hr className="sidebar-divider my-0" />
                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/teamleader-tasks-list" ? "active" : "inactive"} to={"/teamleader-tasks-list"}>
                                        <i className="fas fa-fw fa-folder"></i>
                                        <span>Tasks</span></Link>
                                </li>

                                <hr className="sidebar-divider my-0" />

                                

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <div className="nav-link" onClick={(evt) => this.handleLogOutChange(evt)}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </div>
                                </li>

                                <hr className="sidebar-divider my-0" />

                            </ul>

                            {/* Content Wrapper */}
                            <div id="content-wrapper" className="d-flex flex-column">

                                {/* Main Content */}
                                <div id="content">

                                    <Header />

                                    {/* Begin Page Content */}
                                    <div className="container-fluid">
                                        <Routes>
                                            <Route exact path="/profile" element={<Profile location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-view-users" element={<TeamleaderUsersList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route exact path="/teamleader-dashboard" element={<TeamleaderDashboard location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-view-user" element={<TeamleaderViewUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-edit-users" element={<TeamleaderEditUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-tasks-list" element={<TeamleaderMainTasksList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-project-list" element={<TeamleaderProjectList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-view-project" element={<TeamleaderViewProject location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-add-users" element={<TeamleaderAddUsers location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-view-maintasks" element={<TeamleaderViewMainTasks location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-subtask-list" element={<TeamleaderSubTaskList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-create-maintask" element={<TeamleaderCreateMainTask location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-add-subtask" element={<TeamleaderAddSubtask location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-edit-maintask" element={<TeamleaderEditMainTask location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-edit-subtask" element={<TeamleaderEditSubTask location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-view-subtask" element={<TeamleaderViewSubtask location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/teamleader-view-issues" element={<TeamleaderViewIssues location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/404" component={ErrorPage} />
                                            

                                        </Routes>
                                    </div>

                                </div>
                                {/* End of Main Content */}

                                <Footer />

                            </div>
                            {/* End of Content Wrapper */}

                        </div>
                        {/* End of Page Wrapper Scroll to Top Button*/}

                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>

                        {/* Logout Modal*/}
                        <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                        <a className="btn btn-primary" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BrowserRouter>

                </div>
            );
        }
        //DEVELOPER
        else if (this.state.userType === "developer") {
            return (
                <div id="page-top">
                    <BrowserRouter>
                        <div id="wrapper">

                            {/* Sidebar */}
                            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                                {/* Sidebar - Brand */}
                                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">Task Manager</div>
                                </a>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - Dashboard */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/developer-dashboard" ? "active" : "inactive"} to={"/developer-dashboard"}>
                                        <i className="fas fa-fw fa-tachometer-alt"></i>
                                        <span>Dashboard</span></Link>
                                </li>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                
                                
                                
                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/developer-tasks-list" ? "active" : "inactive"} to={"/developer-tasks-list"}>
                                        <i className="fas fa-fw fa-folder"></i>
                                        <span>Tasks</span></Link>
                                </li>

                                <hr className="sidebar-divider my-0" />

                                

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <div className="nav-link" onClick={(evt) => this.handleLogOutChange(evt)}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </div>
                                </li>

                                <hr className="sidebar-divider my-0" />

                            </ul>

                            {/* Content Wrapper */}
                            <div id="content-wrapper" className="d-flex flex-column">

                                {/* Main Content */}
                                <div id="content">

                                    <Header />

                                    {/* Begin Page Content */}
                                    <div className="container-fluid">
                                        <Routes>
                                            
                                           
                                            <Route path="/developer-dashboard" element={<DeveloperDashboard location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route exact path="/profile" element={<Profile location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/developer-tasks-list" element={<DeveloperTasksList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/developer-add-progress" element={<DeveloperAddProgress location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} /> 
                                            <Route path="/developer-view-tasks" element={<DeveloperViewTasks location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/404" component={ErrorPage} />
                                            

                                        </Routes>
                                    </div>

                                </div>
                                {/* End of Main Content */}

                                <Footer />

                            </div>
                            {/* End of Content Wrapper */}

                        </div>
                        {/* End of Page Wrapper Scroll to Top Button*/}

                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>

                        {/* Logout Modal*/}
                        <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                        <a className="btn btn-primary" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BrowserRouter>

                </div>
            );
        }
        //TESTER
        else if (this.state.userType === "tester") {
            return (
                <div id="page-top">
                    <BrowserRouter>
                        <div id="wrapper">

                            {/* Sidebar */}
                            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                                {/* Sidebar - Brand */}
                                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">Task Manager</div>
                                </a>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                {/* Nav Item - Dashboard */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/tester-dashboard" ? "active" : "inactive"} to={"/tester-dashboard"}>
                                        <i className="fas fa-fw fa-tachometer-alt"></i>
                                        <span>Dashboard</span></Link>
                                </li>

                                {/* Divider */}
                                <hr className="sidebar-divider my-0" />

                                
                                
                                
                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName={this.state.urlPath === "/tester-tasks-list" ? "active" : "inactive"} to={"/tester-tasks-list"}>
                                        <i className="fas fa-fw fa-folder"></i>
                                        <span>Tasks</span></Link>
                                </li>

                                <hr className="sidebar-divider my-0" />

                                

                                {/* Nav Item - client */}
                                <li className="nav-item">
                                    <div className="nav-link" onClick={(evt) => this.handleLogOutChange(evt)}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </div>
                                </li>

                                <hr className="sidebar-divider my-0" />

                            </ul>

                            {/* Content Wrapper */}
                            <div id="content-wrapper" className="d-flex flex-column">

                                {/* Main Content */}
                                <div id="content">

                                    <Header />

                                    {/* Begin Page Content */}
                                    <div className="container-fluid">
                                        <Routes>
                                            <Route exact path="/profile" element={<Profile location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/tester-view-allmaintask" element={<TesterViewAllMaintask location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} /> 
                                            <Route path="/tester-dashboard" element={<TesterDashboard location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/tester-add-progress" element={<TesterAddProgress location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/tester-tasks-list" element={<TesterTasksList location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/tester-add-issues" element={<TesterAddIssues location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/tester-view-tasks" element={<TesterViewTasks location={this.location.bind(this)} navigate={this.navigate.bind(this)} menuactive={this.handleMenuChange.bind(this)} />} />
                                            <Route path="/404" component={ErrorPage} />
                                            

                                        </Routes>
                                    </div>

                                </div>
                                {/* End of Main Content */}

                                <Footer />

                            </div>
                            {/* End of Content Wrapper */}

                        </div>
                        {/* End of Page Wrapper Scroll to Top Button*/}

                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>

                        {/* Logout Modal*/}
                        <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                        <a className="btn btn-primary" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BrowserRouter>

                </div>
            );
        }
    }
}

export default Dashboard;
