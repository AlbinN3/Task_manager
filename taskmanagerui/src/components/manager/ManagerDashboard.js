import React, { Component } from 'react';
import { Chart } from 'chart.js/auto';
class ManagerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userCount:"",
     taskInProgress:"",
     completedTasks:"",
     totalTask:'',
     totalProjects:'',
     projectsCompleted:''
    };
    this.chartRef = React.createRef();
    this.chart = null;
    this.UserCount = this.UserCount.bind(this);
  } 
  componentDidMount() {
    // Call the method to fetch user count when the component mounts
    this.UserCount();
    this.TaskInProgressCount();
    this.CompletedTask();
    this.TotalTask();
    this.TotalProject();
    this.ProjectCompleted();
    this.fetchData();
  } 
  TaskInProgressCount(){
    fetch('http://localhost:8080/users/count/taskinprogress',{
         method: 'GET',
         headers: {
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         }
       })
       .then((response) => {return response.json()})
       .then((data) => {
         this.setState({taskInProgress: data});
       })
  }
  UserCount(){
    fetch('http://localhost:8080/users/count',{
         method: 'GET',
         headers: {
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         }
       })
       .then((response) => {return response.json()})
       .then((data) => {
         this.setState({userCount: data});
       })
  }
  CompletedTask(){
    fetch('http://localhost:8080/users/admin/count/completedtask',{
         method: 'GET',
         headers: {
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         }
       })
       .then((response) => {return response.json()})
       .then((data) => {
         this.setState({completedTasks: data});
       })
  }
  TotalTask(){
    fetch('http://localhost:8080/users/admin/count/totaltask',{
         method: 'GET',
         headers: {
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         }
       })
       .then((response) => {return response.json()})
       .then((data) => {
         this.setState({totalTask: data});
       })
  }
  TotalProject(){
    fetch('http://localhost:8080/users/admin/count/totalproject',{
         method: 'GET',
         headers: {
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         }
       })
       .then((response) => {return response.json()})
       .then((data) => {
         this.setState({totalProjects: data});
       })
  }
  ProjectCompleted(){
        
      fetch('http://localhost:8080/users/admin/count/projectcompleted', {
      method: 'GET',
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
     })
      .then((response) => { return response.json() })
      .then((data) => {
    this.setState({ projectsCompleted: data });
   })
 }
 componentDidMount() {
  this.fetchData();
}

componentDidUpdate(prevProps, prevState) {
  // Check if any of the state values have changed
  if (prevState !== this.state) {
    this.buildChart();
  }
}

componentWillUnmount() {
  if (this.chart) {
    this.chart.destroy(); // Clean up the chart instance when the component unmounts
  }
}

fetchData() {
  // Fetch all necessary data
  this.UserCount();
  this.TaskInProgressCount();
  this.CompletedTask();
  this.TotalTask();
  this.TotalProject();
  this.ProjectCompleted();
}
buildChart() {
  const { taskInProgress, userCount, completedTasks, totalTask, totalProjects, projectsCompleted } = this.state;
  const chartConfig = {
    type: 'bar',
    data: {
      labels: ['Task In Progress', 'User Count', 'Completed Tasks', 'Total Task', 'Total Projects', 'Projects Completed'],
      datasets: [{
        label: 'Value',
        data: [taskInProgress, userCount, completedTasks, totalTask, totalProjects, projectsCompleted],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  };

  const ctx = this.chartRef.current.getContext('2d');
  if (this.chart) {
    this.chart.destroy(); // Destroy previous chart instance
  }
  this.chart = new Chart(ctx, chartConfig);
}
  render() {
    return (
        <div>
          <canvas ref={this.chartRef} />
        </div>
        
    );
  }
}


export default ManagerDashboard;