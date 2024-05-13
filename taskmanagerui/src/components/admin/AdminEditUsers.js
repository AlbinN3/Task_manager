import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";

class AdminEditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        userid: '',
        username: '',
        email: '',
        password: '',
        designation: ''
      }
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleDesignationChange = this.handleDesignationChange.bind(this);
    this.getUserDataBasedOnId = this.getUserDataBasedOnId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleUserNameChange(e) {
    this.setState(Object.assign(this.state.users, { username: e.target.value }));
  }
  handlePasswordChange(e) {
    this.setState(Object.assign(this.state.users, { password: e.target.value }));
  }
  handleDesignationChange(e) {
    this.setState(Object.assign(this.state.users, { designation: e.target.value }));
  }
  handleEmailChange(e){
    this.setState(Object.assign(this.state.users, { email: e.target.value }));
  }
  componentDidMount() {
    this.getUserDataBasedOnId();
  }

  getUserDataBasedOnId() {
    fetch('http://localhost:8080/users/getuser?userid=' + localStorage.getItem("userId"), {
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
        this.setState({ users: data });
      })
  }

  handleSubmit() {
    fetch('http://localhost:8080/users/add', {
      method: 'POST',
      body: JSON.stringify(
        this.state.users),
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
        window.location.href = "/admin-list-user"
      })
  }
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">Edit User Details</h5>
            <p className="text-center small">Edit User Details</p>
          </div>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">User Name</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.users.username} onChange={(event) => { this.handleUserNameChange(event) }} className="form-control" id="yourUsername" required />
                <div className="invalid-feedback">Please enter project name.</div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">Email</label>
              <div className="input-group has-validation">
                <input type="email" name="username" value={this.state.users.email} onChange={(event) => { this.handleEmailChange(event) }} className="form-control" id="yourUsername" required />
                <div className="invalid-feedback">Please enter project name.</div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Password</label>
              <input type="text" name="password" className="form-control" id="password" value={this.state.users.password} onChange={(evt) => this.handlePasswordChange(evt)} required />
              <div className="invalid-feedback">Please enter project start date!</div>
            </div>
            <div className="col-12">
            <label htmlFor="designation" className="form-label">Designation</label>
            <div></div>
            <select 
              className="form-select" 
              id="designation" 
              name="designation" 
              value={this.state.users.designation} 
              onChange={(evt) => this.handleDesignationChange(evt)} 
              required
            >
              <option value="">Select Designation</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="teamleader">Teamleader</option>
              <option value="developer">Developer</option>
              <option value="tester">Tester</option>
              <option value="client">Client</option>
            </select>
            <div className="invalid-feedback">Please select a designation!</div>
          </div>
            <div className="col-12">
              <br />
              <button className="btn btn-primary w-100" type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminEditProject;