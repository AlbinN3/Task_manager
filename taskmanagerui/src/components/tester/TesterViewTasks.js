import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";
class TesterViewTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        taskid: '',
        taskname: '',
        projectid: '',
        teamleaderid: '',
        userid: '',
        startdate:'',
        duedate:'',
        description:'',
        gitlink:''
      }
    };
    this.getTaskDataBasedOnId = this.getTaskDataBasedOnId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.getTaskDataBasedOnId();
  }

  getTaskDataBasedOnId() {
    fetch('http://localhost:8080/task/searchid?taskId='+localStorage.getItem("taskId"), {
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
        this.setState({ task: data });
      })
  }

  handleSubmit() {
    window.location.href="/tester-view-allmaintask"
  }
  render() {
    return (
        <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">View Task Details</h5>
            <p className="text-center small">View task details</p>
          </div>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">Project Name</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.task.taskname}  className="form-control" id="yourUsername" disabled required />
                <div className="invalid-feedback">Please enter project name.</div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Description</label>
              <textarea name="description" value={this.state.task.description}  className="form-control" id="yourUsername" disabled rows="3" />
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Start Date (YYYY-MM-DD)</label>
              <input type="date" name="start date" className="form-control" id="startdate" value={this.state.task.startdate} disabled required />
              <div className="invalid-feedback">Please enter project start date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">End Date (YYYY-MM-DD)</label>
              <input type="date" name="duedate" className="form-control" id="duedate" value={this.state.task.duedate} disabled required />
              <div className="invalid-feedback">Please enter project end date!</div>
            </div>
            <div className="col-12">
                <label htmlFor="yourUsername" className="form-label">Git Repository Link</label>
                <div className="input-group has-validation">
                  <a href={this.state.task.gitlink} target="_blank" rel="noopener noreferrer" className="form-control">
                    {this.state.task.gitlink}
                  </a>
                  <div className="invalid-feedback">Please enter a valid Git repository link.</div>
                </div>
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

export default TesterViewTasks;