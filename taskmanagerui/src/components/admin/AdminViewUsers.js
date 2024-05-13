import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";
class AdminViewUsers extends Component {
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
    this.getUserDataBasedOnId = this.getUserDataBasedOnId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.getUserDataBasedOnId();
  }

  getUserDataBasedOnId() {
    fetch('http://localhost:8080/users/getuser?userid='+localStorage.getItem("userId"), {
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
    window.location.href="/admin-list-user"
  }
  render() {
    return (
        <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">View User Details</h5>
            <p className="text-center small">View user details</p>
          </div>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">User Name</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.users.username}  className="form-control" id="yourUsername" disabled required />
                <div className="invalid-feedback">Please enter project name.</div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Password</label>
              <input type="text" name="password" className="form-control" id="password" value={this.state.users.password} disabled required />
              <div className="invalid-feedback">Please enter project start date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Designation</label>
              <input type="text" name="duedate" className="form-control" id="duedate" value={this.state.users.designation} disabled required />
              <div className="invalid-feedback">Please enter project end date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Email</label>
              <input type="email" name="duedate" className="form-control" id="duedate" value={this.state.users.email} disabled required />
              <div className="invalid-feedback">Please enter project end date!</div>
            </div>
            <div className="col-12">
              <br />
              <button className="btn btn-primary w-100" type="button" onClick={this.handleSubmit}>Back to User List</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminViewUsers;