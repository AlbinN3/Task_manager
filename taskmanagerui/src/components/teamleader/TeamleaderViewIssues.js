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
class TeamleaderViewIssues extends Component {
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
        this.getUserDataBasedOnId = this.getUserDataBasedOnId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        window.location.href="/teamleader-subtask-list"
      }
      render() {
        return (
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">View Issues</h5>
                <p className="text-center small"></p>
              </div>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">Task Issues</label>
                  <div className="input-group has-validation">
                    <input type="text" name="username" value={this.state.tasks.issues}  className="form-control" id="yourUsername" disabled required />
                    <div className="invalid-feedback">Please enter project name.</div>
                  </div>
                </div>
                <div className="col-12">
                  <br />
                  <button className="btn btn-primary w-100" type="button" onClick={this.handleSubmit}>Go Back to Subtask List</button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    }

export default TeamleaderViewIssues;