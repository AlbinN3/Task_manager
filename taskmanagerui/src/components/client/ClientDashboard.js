import React, { Component } from 'react';
import '../../assets/css/App.css';
class ClientDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          progressValue: [],
          userId:""
        };
        this.handleOnLoad = this.handleOnLoad.bind(this);
      }
      componentDidMount() {
        this.setState({ userName: sessionStorage.getItem("userName") });
        this.setState({ userId: sessionStorage.getItem("userId")});
        this.setState({ userType: sessionStorage.getItem("userType")});
        this.handleOnLoad();
    }
       handleOnLoad(){
        
         fetch('http://localhost:8080/client/progress/'+sessionStorage.getItem("userId") , {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({ progressValue: data });
       
      })
      }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Project Progress</h1>
        <div className="project-container">
          {/* Map through the projectData array and display each pair */}
          {this.state.progressValue && this.state.progressValue.length > 0 && this.state.progressValue.map((progress, index) => (
            <div key={index} className="project">
              <div>Project ID: {progress.projectid}</div>
              <div>Project Name: {progress.projectname}</div>
              <div>Progress: {progress.progress}%</div>
            </div>
          ))}
        </div>
      </header>
    </div>
    );
  }
}
export default ClientDashboard;