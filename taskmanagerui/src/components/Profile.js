import React, { Component } from 'react';
import '../assets/css/ProfilePage.css';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username:'',
                designation:'',
                email:'',
                userid:''
            },
            userid:''
        };
    }
    componentDidMount(){
        this.getUserDataBasedOnId();
      }
    getUserDataBasedOnId() {
        fetch('http://localhost:8080/users/getuser?userid='+localStorage.getItem("userId"), {
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
            this.setState({ user: data });
          })
      }
    render() {
        const { username, designation, email, userid } = this.state.user;

        return (
            <div className="profile-container"> {/* Apply a class for styling */}
                <h1 className="profile-heading">User Profile</h1> {/* Apply a class for styling */}
                <div className="profile-item">
                    <label className="profile-label">Username:</label> {/* Apply classes for styling */}
                    <div className="profile-value">{username}</div> {/* Apply classes for styling */}
                </div>
                <div className="profile-item">
                    <label className="profile-label">Designation:</label> {/* Apply classes for styling */}
                    <div className="profile-value">{designation}</div> {/* Apply classes for styling */}
                </div>
                <div className="profile-item">
                    <label className="profile-label">Email:</label> {/* Apply classes for styling */}
                    <div className="profile-value">{email}</div> {/* Apply classes for styling */}
                </div>
                <div className="profile-item">
                    <label className="profile-label">User ID:</label> {/* Apply classes for styling */}
                    <div className="profile-value">{userid}</div> {/* Apply classes for styling */}
                </div>
            </div>
        );
        
    }
}

export default Profile;
