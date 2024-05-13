import React, { Component } from 'react';
import '../assets/vendor/fontawesome-free/css/all.min.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName:"",
          password:"",
          users: {
            userid: '',
            username: '',
            email: '',
            password: '',
            designation: ''
          }
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
      }  
    

      handleOnSubmit(evt){
        fetch('http://localhost:8080/users/login?userName='+this.state.userName+'&password='+this.state.password, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data });
        const { username, userid, designation } = data;
        sessionStorage.setItem("userName", username);
        sessionStorage.setItem("userId", userid);
        sessionStorage.setItem("userType",designation);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert("Wrong Credentials!")
        });
      }

      handleUserNameChange(evt){
        this.setState({userName: evt.target.value});
      }

      handleUserPasswordChange(evt){
        this.setState({password: evt.target.value})
      }
    render() {
        return (
            <div className="container">

                {/*-- Outer Row --*/}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                               {/*-- Nested Row within Card Body --*/}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputUsername" aria-describedby="usernameHelp"
                                                        placeholder="Enter Username..." value={this.state.userName} onChange={(event) => { this.handleUserNameChange(event) } }/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" value={this.state.password} onChange={(event) => { this.handleUserPasswordChange(event) } }/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <button onClick={this.handleOnSubmit} className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Login;