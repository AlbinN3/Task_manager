import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import Select from "react-dropdown-select";
class DeveloperViewTasks extends Component {
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
        progress:'',
        description:'',
        priority:''
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
    window.location.href="/developer-tasks-list"
  }
  render() {
    let showWarning=0;
    const currentDate = new Date();
    const dueDate = new Date(this.state.task.duedate);
    const differenceInMs = dueDate - currentDate;
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    if(differenceInDays<=0){
      showWarning=-1;
    }
    else if(differenceInDays<=7){
      showWarning=0;
    }
    else{
      showWarning=1;
    }
    
    const { priority } = this.state.task;

    let priorityLabel;
    let labelColor;
  
    switch(priority) {
      case 0:
        priorityLabel = 'Low';
        labelColor = 'green'; // Green for low priority
        break;
      case 50:
        priorityLabel = 'Mid';
        labelColor = 'orange'; // Yellow for mid priority
        break;
      case 100:
        priorityLabel = 'High';
        labelColor = 'red'; // Red for high priority
        break;
      default:
        priorityLabel = 'Unknown';
        labelColor = 'black'; // Black for unknown priority
    }
  
    const labelStyle = {
      color: labelColor // Apply color based on priority
    };
    return (
        <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">View Task Details</h5>
            <p className="text-center small">View task details</p>
            <label style={labelStyle}>Priority: {priorityLabel}</label>
            {showWarning === 0 && (
              <div className="warning warning-red">
                You have only {differenceInDays} days to complete this task!
              </div>
            )}
            {showWarning === -1 && (
              <div className="warning warning-black">
                Task has passed the due date!
              </div>
            )}
            {showWarning === 1 && (
              <div className="warning warning-green">
                You have {differenceInDays} days to finish this task!
              </div>
            )}
          </div>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">Task Name</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.task.taskname}  className="form-control" id="yourUsername" disabled required />
              </div>
            </div>
            <div className="col-12">
            <label htmlFor="yourPassword" className="form-label">Description</label>
            <textarea 
            name="description" 
            value={this.state.task.description} 
            rows={3}
            className="form-control" 
            id="yourUsername" 
            disabled 
            required 
            />
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Start Date (YYYY-MM-DD)</label>
              <input type="date" name="start date" className="form-control" id="startdate" value={this.state.task.startdate} disabled required />
            </div>
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">End Date (YYYY-MM-DD)</label>
              <input type="date" name="duedate" className="form-control" id="duedate" value={this.state.task.duedate} disabled required />
            </div>
            <div className="col-12">
              <label htmlFor="yourUsername" className="form-label">Task Progress</label>
              <div className="input-group has-validation">
                <input type="text" name="username" value={this.state.task.progress}  className="form-control" id="yourUsername" disabled required />
              </div>
            </div>
            <div className="col-12">
              <br />
              <button className="btn btn-primary w-100" type="button" onClick={this.handleSubmit}>Back to Task List</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DeveloperViewTasks;