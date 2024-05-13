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
class TesterAddIssues extends Component {
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
            issues:''
          },
          designationList:[{ id: 1, name: 'teamleader' },
          { id: 2, name: 'developer' },
          { id: 3, name: 'tester' }]
        };
        this.handleProgressChange = this.handleProgressChange.bind(this);
        this.getUserDataBasedOnId = this.getUserDataBasedOnId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleProgressChange(e) {
        this.setState(Object.assign(this.state.tasks, { issues: e.target.value }));
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
            
            window.location.href = "/tester-view-allmaintask"
          })
      }
      render() {
        return (
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Edit Or Enter Issue</h5>
                <p className="text-center small">Edit issue Details</p>
              </div>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">Previous Issues</label>
                  <div className="input-group has-validation">
                    <input type="text" name="username" value={this.state.tasks.issues} onChange={(event) => { this.handleProgressChange(event) }} className="form-control" id="yourUsername" required />
                    <div className="invalid-feedback">Please enter project name.</div>
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

export default TesterAddIssues;