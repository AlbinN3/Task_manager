import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";
const options = [
  {
    id: 1,
    name: 'Leanne Graham'
  },
  {
    id: 2,
    name: 'Ervin Howell'
  }
];
class TeamleaderCreateSubtask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        taskid: '',
        taskname: '',
        priority: '',
        projectid: '',
        teamleaderid:'',
        userid:'',
        maintaskid:'',
        description:''
      },
      devtest:[{
        username:'',
        userid:'',
        designation:''
      }]
    };
    this.handletaskNameChange = this.handleTaskNameChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state.tasks.projectid = localStorage.getItem('projectId'); 
    this.state.tasks.teamleaderid = sessionStorage.getItem('userId'); 
    this.state.tasks.maintaskid=localStorage.getItem('mainTaskId');
    this.getAllDeveloperTesterData=this.getAllDeveloperTesterData.bind(this);
  }
  handleTaskNameChange(e) {
    this.setState(Object.assign(this.state.tasks, { taskname: e.target.value }));
  }
  handlePriorityChange(e) {
    this.setState(Object.assign(this.state.tasks, { priority: e.target.value }));
  }
  handleDescriptionChange(e){
    this.setState(Object.assign(this.state.tasks, { description: e.target.value }));
  }
  handleStartDateChange(e) {
    this.setState(Object.assign(this.state.tasks, { startdate: e.target.value }));
  }
  handleDueDateChange(e) {
    this.setState(Object.assign(this.state.tasks, { duedate: e.target.value }));
  }
  handleDevTestChange(e){
    this.setState(Object.assign(this.state.tasks, { userid: e.target.value }));
}
  componentDidMount(){
    this.getAllDeveloperTesterData();
  }

  handleSubmit() {
    fetch('http://localhost:8080/task/teamleader/subtask/add',{
    method: 'POST',
    body: JSON.stringify(
    this.state.tasks),
    headers: {
      "Accept" : "application/json",
      "Content-Type" : "application/json"
    }
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      //this.setState({ project: data });
      window.location.href="/teamleader-subtask-list"
    })
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
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">Add Sub Task Details</h5>
            <p className="text-center small">Enter subtask details</p>
          </div>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">Sub Task Name</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.tasks.taskname} onChange={(event) => { this.handleTaskNameChange(event) }} className="form-control" id="yourUsername" required />
                <div className="invalid-feedback">Please enter project name.</div>
              </div>
            </div>
            <div className="col-12">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              name="description"
              value={this.state.tasks.description}
              onChange={(event) => { this.handleDescriptionChange(event) }}
              className="form-control"
              id="description"
              rows="3" // Specify the number of visible rows for the textarea
              required
            />
            <div className="invalid-feedback">Please enter project description!</div>
            </div>
          <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Start Date (YYYY-MM-DD)</label>
              <input type="date" name="password" className="form-control" id="password" value={this.state.tasks.startdate} onChange={(evt) => this.handleStartDateChange(evt)} required />
              <div className="invalid-feedback">Please enter project start date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Due Date (YYYY-MM-DD)</label>
              <input type="date" name="password" className="form-control" id="password" value={this.state.tasks.duedate} onChange={(evt) => this.handleDueDateChange(evt)} required />
              <div className="invalid-feedback">Please enter project start date!</div>
            </div>
            <div className="col-12">
            <label htmlFor="priority" className="form-label">Priority</label>
            <div></div>
            <select 
              className="form-select" 
              id="priority" 
              name="priority" 
              value={this.state.tasks.priority} 
              onChange={(evt) => this.handlePriorityChange(evt)} 
              required
            >
              <option value="">Select Priority</option>
              <option value="0">Low</option>
              <option value="50">Mid</option>
              <option value="100">High</option>
            </select>
            <div className="invalid-feedback">Please select a priority!</div>
          </div>
            <div className="col-12">
            <label htmlFor="dropdown" className="form-label">Select Developer or Tester</label>
            <div></div>
            <select 
            className="form-select" 
            id="dropdown" 
            name="dropdown" 
            value={this.state.devtest.userid} 
            onChange={(evt) => { this.handleDevTestChange(evt) }} 
            required
            >
            <option value="">Select Option</option>
            {/* Map through the options and create options for the dropdown */}
            {this.state.devtest.map(option => (
             <option key={option.userid} value={option.userid}>{option.userid} - {option.username}({option.designation})</option>
            ))}
            </select>
            <div className="invalid-feedback">Please select an option!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Project ID</label>
              <input type="text" name="duedate" className="form-control" id="duedate" value={localStorage.getItem('projectId')} disabled required />
              <div className="invalid-feedback">Please enter project end date!</div>
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Teamleader ID</label>
              <input type="text" name="duedate" className="form-control" id="duedate" value={sessionStorage.getItem('userId')} disabled required />
              <div className="invalid-feedback">Please enter project end date!</div>
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
export default TeamleaderCreateSubtask;