import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";
class TeamleaderViewSubtask extends Component {
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
        gitlink:'',
        progress:'',
        issues:''
      },
      devtest:[{
        username:'',
        userid:'',
        designation:''
      }]
    };
    this.getTaskDataBasedOnId = this.getTaskDataBasedOnId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllDeveloperTesterData=this.getAllDeveloperTesterData.bind(this);
  }

  componentDidMount(){
    this.getTaskDataBasedOnId();
    this.getAllDeveloperTesterData();
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
  getPriorityLabel() {
    const priority = this.state.task.priority;
    if (priority === 0) {
      return "Low";
    } else if (priority === 50) {
      return "Mid";
    } else if (priority === 100) {
      return "High";
    } else {
      return "Unknown"; // Or any default value
    }
  }
  getAllDeveloperTesterData(){
    fetch('http://localhost:8080/developertester/all', {
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
    this.setState({devtest: data});
  })
  }
  handleSubmit() {
    window.location.href="/teamleader-subtask-list"
  }
  render() {
    return (
        <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">View Sub Task Details</h5>
            <p className="text-center small">View sub task details</p>
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
              <label htmlFor="yourPassword" className="form-label">Progress</label>
              <input name="description" value={this.state.task.progress}  className="form-control" id="yourUsername" disabled  />
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Issues</label>
              <input name="description" value={this.state.task.issues}  className="form-control" id="yourUsername" disabled  />
            </div>
            <div className="col-12">
            <label htmlFor="priority" className="form-label">Priority</label>
            <input 
              name="priority" 
              value={this.getPriorityLabel()}  
              className="form-control" 
              id="priority" 
              disabled  
            />
            </div>
            <div className="col-12">
            <label htmlFor="dropdown" className="form-label">Developer or Tester</label>
            <div></div>
            <select 
              className="form-select" 
              id="dropdown" 
              name="dropdown" 
              value={this.state.task.userid} 
              disabled // Disable the select element
              required
            >
              {/* Show the selected option */}
              {this.state.devtest.map(option => (
                <option key={option.userid} value={option.userid}>
                  {option.userid} - {option.username} ({option.designation})
                </option>
              ))}
            </select>
            <div className="invalid-feedback">Please select an option!</div>
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
              <button className="btn btn-primary w-100" type="button" onClick={this.handleSubmit}>Back to Tasks List</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TeamleaderViewSubtask;