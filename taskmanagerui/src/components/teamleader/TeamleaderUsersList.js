import React, { Component } from 'react';

class TeamleaderUsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue:"",
      userData: []
    };
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }  

  componentDidMount(){
    this.handleOnLoad();
  }
  handleEditChange(e, userid) {
    localStorage.setItem("userId", userid)
    window.location.href = "/teamleader-edit-users";
  }
handleAddUserBtnChange(e){
    
  localStorage.setItem("userId", "")
    window.location.href = "/teamleader-add-users";
  }
  handleViewChange(e, userid) {
    localStorage.setItem("userId", userid)
    window.location.href = "/teamleader-view-user";
  }
  handleDeleteChange(e, userid) {
    fetch('http://localhost:8080/users/delete/' + userid, {
      method: 'DELETE'
    }).then((response) => { this.handleOnLoad(); })
  }

   handleSearchOnChange(e){
     if(e.target.value) {
       fetch('http://localhost:8080/users/under/teamleader/search?name='+e.target.value,{
         method: 'GET',
         headers: {
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         }
       })
       .then((response) => {return response.json()})
       .then((data) => {
         this.setState({userData: data});
       })
     }
   }

  async handleOnLoad(){
    await fetch('http://localhost:8080/users/under/teamleader',{
      method: 'GET',
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      }
    })
    .then((response) => {return response.json()})
    .then((data) => {
      this.setState({userData: data});
    })
    

}

  render() {
    return (
      <div className="container-fluid">

      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">User List</h1>

      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTable_length">
                    <label>Show <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div id="dataTable_filter" className="dataTables_filter">
                    <label>Search:<input type="search" className="form-control form-control-sm" style={{width: "364px"}} placeholder="" aria-controls="dataTable" onChange={(event) => { this.handleSearchOnChange(event) }} />
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-2">
                <label></label>
                <button className="btn btn-primary w-100" type="button" style={{padding: "13px"}} onClick={(evt)=>this.handleAddUserBtnChange(evt)}>Add User</button>
                </div>
              </div><div className="row"><div className="col-sm-12"><table className="table table-bordered dataTable" id="dataTable" width="100%" role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                <thead>
                  <tr role="row"><th className="sorting sorting_asc" aria-controls="dataTable" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '57.2px' }}>ID</th><th className="sorting" aria-controls="dataTable" aria-label="Position: activate to sort column ascending" style={{ width: '61.2px' }}>Name</th><th className="sorting sorting_asc" aria-controls="dataTable" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '57.2px' }}>Designation</th>
                  <th className="sorting sorting_asc" aria-controls="dataTable" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '57.2px' }}>Tools</th></tr>
                </thead>
                <tbody>
                {this.state.userData && this.state.userData.length > 0 && this.state.userData.map((user, index)=>{
                    return(                    
                      <tr className="odd" key={index}>
                        <td className="sorting_1">{user.userid}</td>
                        <td>{user.username}</td>
                        <td>{user.designation}</td>
                        <td>
                        <a href="#" onClick={evt => this.handleViewChange(evt, user.userid)} className="grn_table_link">View  </a>
                          <a href="#" onClick={evt => this.handleEditChange(evt, user.userid)} className="grn_table_link">Edit</a>
                          <a href="#" onClick={evt => this.handleDeleteChange(evt, user.userid)} className="grn_table_link"> Delete</a>
                        </td>


                      </tr>);
                })}
              </tbody>
            </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6"  className="page-link">6</a></li><li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" className="page-link">Next</a></li></ul></div></div></div></div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default TeamleaderUsersList;