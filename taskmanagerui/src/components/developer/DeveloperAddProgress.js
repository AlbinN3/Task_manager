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
class DeveloperAddProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: {
            taskid: '',
            taskname: '',
            startdate: '',
            duedate: '',
            description: '',
            progress:'',
            gitlink:''
          },
          designationList:[{ id: 1, name: 'teamleader' },
          { id: 2, name: 'developer' },
          { id: 3, name: 'tester' }]
        };
        this.handleProgressChange = this.handleProgressChange.bind(this);
        this.getUserDataBasedOnId = this.getUserDataBasedOnId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGitLinkChange = this.handleGitLinkChange.bind(this);
      }
      handleProgressChange(e) {
        this.setState(Object.assign(this.state.tasks, { progress: e.target.value }));
      }
      handleGitLinkChange(e) {
        this.setState(Object.assign(this.state.tasks, { gitlink: e.target.value }));
      }  
      componentDidMount() {
        this.getUserDataBasedOnId();
      }
    
      getUserDataBasedOnId() {
        fetch('http://localhost:8080/task/taskid/all?taskId=' + localStorage.getItem("taskId"), {
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
            this.setState({ tasks: data });
          })
      }
    
      handleSubmit() {
        fetch('http://localhost:8080/task/teamleader/subtask/add', {
          method: 'POST',
          body: JSON.stringify(
            this.state.tasks),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        })
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.setState({ tasks: data });
            
            window.location.href = "/developer-tasks-list"
          })
      }
      render() {
        return (
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Edit Or Enter Progress</h5>
                <p className="text-center small">Edit progress Details</p>
              </div>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">Task Progress</label>
                  <div className="input-group has-validation">
                    <input type="text" name="username" value={this.state.tasks.progress} onChange={(event) => { this.handleProgressChange(event) }} className="form-control" id="yourUsername" required />
                    <div className="invalid-feedback">Please enter project name.</div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">Change Git Repository Lin</label>
                  <div className="input-group has-validation">
                    <input type="text" name="username" value={this.state.tasks.gitlink} onChange={(event) => { this.handleGitLinkChange(event) }} className="form-control" id="yourUsername" required  />
                    <div className="invalid-feedback">Please enter project name.</div>
                  </div>
                </div>
                <div className="col-12">
                <label htmlFor="yourUsername" className="form-label">Git Repository Link</label>
                <div className="input-group has-validation">
                  <a href={this.state.tasks.gitlink} target="_blank" rel="noopener noreferrer" className="form-control">
                    {this.state.tasks.gitlink}
                  </a>
                  <div className="invalid-feedback">Please enter a valid Git repository link.</div>
                </div>
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

export default DeveloperAddProgress;