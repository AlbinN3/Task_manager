import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";
class TeamleaderViewProject extends Component {
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
        duedate:'',
        description:''
      }
    };
    this.getProjectDataBasedOnId = this.getProjectDataBasedOnId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.getProjectDataBasedOnId();
  }

  getProjectDataBasedOnId() {
    fetch('http://localhost:8080/project/getproject?projectid='+localStorage.getItem("projectId"), {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ project: data });
      })
  }

  handleSubmit() {
    window.location.href="/teamleader-project-list"
  }
  render() {
    return (
        <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">View Project Details</h5>
            <p className="text-center small">View project details</p>
          </div>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">Project Name</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.project.projectname}  className="form-control" id="yourUsername" disabled required />
                <div className="invalid-feedback">Please enter project name.</div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Description</label>
              <textarea name="description" value={this.state.project.description}  className="form-control" id="yourUsername" disabled rows="3" />
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Start Date (YYYY-MM-DD)</label>
              <input type="date" name="start date" className="form-control" id="startdate" value={this.state.project.startdate} disabled required />
              <div className="invalid-feedback">Please enter project start date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">End Date (YYYY-MM-DD)</label>
              <input type="date" name="duedate" className="form-control" id="duedate" value={this.state.project.duedate} disabled required />
              <div className="invalid-feedback">Please enter project end date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Teamleader ID</label>
              <input type="text" name="teamleaderid" value={this.state.project.teamleaderid} className="form-control" id="yourPassword" disabled />
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Manager ID</label>
              <input type="text" name="managerid" value={this.state.project.managerid} className="form-control" id="yourPassword" disabled />
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Client ID</label>
              <input type="text" name="clientid" value={this.state.project.clientid} className="form-control" id="yourPassword" disabled />
            </div>
            <div className="col-12">
              <br />
              <button className="btn btn-primary w-100" type="button" onClick={this.handleSubmit}>Back to Project List</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TeamleaderViewProject;