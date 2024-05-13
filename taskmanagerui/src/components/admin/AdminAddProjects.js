import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";
class AdminAddProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        projectid: '',
        projectname: '',
        managerid: '',
        teamleaderid: '',
        clientid: '',
        startdate:'',
        duedate:''
      },
      manager:[{
        userid:'',
        username:''
      }],
      teamleader:[{
        userid:'',
        username:''
      }],
      client:[{
        userid:'',
        username:''
      }]
    };
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndtDateChange = this.handleEndtDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllManagerData=this.getAllManagerData.bind(this);
    this.getAllTeamleaderData=this.getAllTeamleaderData.bind(this);
    this.getAllClientData=this.getAllClientData.bind(this);
  }
  handleProjectNameChange(e) {
    this.setState(Object.assign(this.state.project, { projectname: e.target.value }));
  }
  handleStartDateChange(e) {
    this.setState(Object.assign(this.state.project, { startdate: e.target.value }));
  }
  handleEndtDateChange(e) {
    this.setState(Object.assign(this.state.project, { duedate: e.target.value }));
  }
  handleDescriptionChange(e){
    this.setState(Object.assign(this.state.project, { description: e.target.value }));
  }
  handleManagerChange(e){
    this.setState(Object.assign(this.state.project, { managerid: e.target.value }));
}
handleClientChange(e){
  this.setState(Object.assign(this.state.project, { clientid: e.target.value }));
}
handleTeamleaderChange(e){
  this.setState(Object.assign(this.state.project, { teamleaderid: e.target.value }));
}
  componentDidMount(){
    this.getAllManagerData();
    this.getAllTeamleaderData();
    this.getAllClientData();
  }
  getAllManagerData(){
    fetch('http://localhost:8080/manager/all', {
      method: 'GET',
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
  })
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    this.setState({manager: data});
  })
  }
  getAllTeamleaderData(){
    fetch('http://localhost:8080/teamleader/all', {
      method: 'GET',
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
  })
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    this.setState({teamleader: data});
  })
  }
  getAllClientData(){
    fetch('http://localhost:8080/client/allclient', {
      method: 'GET',
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
  })
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    this.setState({client: data});
  })
  }
  handleSubmit() {
    fetch('http://localhost:8080/project/add', {
      method: 'POST',
      body: JSON.stringify(
        this.state.project),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        //this.setState({ project: data });
        window.location.href="/admin-list-projects"
      })
  }
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">Add Project Details</h5>
            <p className="text-center small">Enter project details</p>
          </div>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">Project Name</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.project.projectname} onChange={(event) => { this.handleProjectNameChange(event) }} className="form-control" id="yourUsername" required />
                <div className="invalid-feedback">Please enter project name.</div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Description</label>
              <input type="text" name="password" value={this.state.project.description} onChange={(event) => { this.handleDescriptionChange(event) }} className="form-control" id="yourUsername" required />
              <div className="invalid-feedback">Please enter project description!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Start Date (YYYY-MM-DD)</label>
              <input type="date" name="start date" className="form-control" id="startdate" value={this.state.project.startdate} onChange={(evt)=>this.handleStartDateChange(evt)} required />
              <div className="invalid-feedback">Please enter project start date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">End Date (YYYY-MM-DD)</label>
              <input type="date" name="duedate" className="form-control" id="duedate" value={this.state.project.duedate} onChange={(evt)=>this.handleEndtDateChange(evt)}required />
              <div className="invalid-feedback">Please enter project end date!</div>
            </div>
            <div className="col-12">
            <label htmlFor="dropdown" className="form-label">Select Manager</label>
            <div></div>
            <select 
            className="form-select" 
            id="dropdown" 
            name="dropdown" 
            value={this.state.manager.userid} 
            onChange={(evt) => { this.handleManagerChange(evt) }} 
            required
            >
            <option value="">Select Option</option>
            {/* Map through the options and create options for the dropdown */}
            {this.state.manager.map(option => (
             <option key={option.userid} value={option.userid}>{option.userid} - {option.username}</option>
            ))}
            </select>
            <div className="invalid-feedback">Please select an option!</div>
            </div>
            <div className="col-12">
            <label htmlFor="dropdown" className="form-label">Select Teamleader</label>
            <div></div>
            <select 
            className="form-select" 
            id="dropdown" 
            name="dropdown" 
            value={this.state.teamleader.userid} 
            onChange={(evt) => { this.handleTeamleaderChange(evt) }} 
            required
            >
            <option value="">Select Option</option>
            {/* Map through the options and create options for the dropdown */}
            {this.state.teamleader.map(option => (
             <option key={option.userid} value={option.userid}>{option.userid} - {option.username}</option>
            ))}
            </select>
            <div className="invalid-feedback">Please select an option!</div>
            </div>
            <div className="col-12">
            <label htmlFor="dropdown" className="form-label">Select Client</label>
            <div></div>
            <select 
            className="form-select" 
            id="dropdown" 
            name="dropdown" 
            value={this.state.client.userid} 
            onChange={(evt) => { this.handleClientChange(evt) }} 
            required
            >
            <option value="">Select Option</option>
            {/* Map through the options and create options for the dropdown */}
            {this.state.client.map(option => (
             <option key={option.userid} value={option.userid}>{option.userid} - {option.username}</option>
            ))}
            </select>
            <div className="invalid-feedback">Please select an option!</div>
            </div>
            <div className="col-12">
            <br/>
              <button className="btn btn-primary w-100" type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
export default AdminAddProjects;