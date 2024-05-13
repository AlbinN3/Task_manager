import React, { Component } from 'react';

class ManagerProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      projectData: []
    };
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleDeleteChange = this.handleDeleteChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleAddProjectBtnChange = this.handleAddProjectBtnChange.bind(this);
  }

  componentDidMount() {
    this.handleOnLoad();
  }
  handleAddProjectBtnChange(e){
    localStorage.setItem("projectId", "")
    window.location.href = "/manager-add-projects";
  }

  handleViewChange(e, projectid) {
    localStorage.setItem("projectId", projectid)
    window.location.href = "/manager-view-project";
  }

  handleEditChange(e, projectid) {
    localStorage.setItem("projectId", projectid)
    window.location.href = "/manager-edit-project";
  }

  handleDeleteChange(e, projectid) {
    fetch('http://localhost:8080/project/delete/' + projectid, {
      method: 'DELETE'
    }).then((response) => { this.handleOnLoad(); })
  }

  handleSearchOnChange(e) {
    if (e.target.value) {
      fetch('http://localhost:8080/project/search/' + e.target.value, {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
        .then((response) => { return response.json() })
        .then((data) => {
          this.setState({ projectData: data });
        })
    } else {
      this.handleOnLoad();
    }
  }

  async handleOnLoad() {
    await fetch('http://localhost:8080/project/all', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({ projectData: data });
      })


  }

  render() {
    return (
      <div className="container-fluid">

        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Project List</h1>

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
                  <button className="btn btn-primary w-100" type="button" style={{padding: "13px"}} onClick={(evt)=>this.handleAddProjectBtnChange(evt)}>Add Project</button>
                  </div>
                </div><div className="row"><div className="col-sm-12"><table className="table table-bordered dataTable" id="dataTable" width="100%" role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                  <thead>
                    <tr role="row"><th className="sorting sorting_asc" aria-controls="dataTable" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '57.2px' }}>ID</th><th className="sorting" aria-controls="dataTable" aria-label="Position: activate to sort column ascending" style={{ width: '61.2px' }}>Name</th><th className="sorting sorting_asc" aria-controls="dataTable" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '57.2px' }}>Start Date</th>
                    <th className="sorting sorting_asc" aria-controls="dataTable" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '57.2px' }}>Due Date</th><th className="sorting sorting_asc" aria-controls="dataTable" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '57.2px' }}>Tools</th></tr>
                  </thead>
                  <tbody>
                    {this.state.projectData && this.state.projectData.length > 0 && this.state.projectData.map((project, index) => {
                      return (
                        <tr className="odd" key={index}>
                          <td className="sorting_1">{project.projectid}</td>
                          <td>{project.projectname}</td>
                          <td>{project.startdate}</td>
                          <td>{project.duedate}</td>
                          <td>
                            <a href="#" onClick={evt => this.handleViewChange(evt, project.projectid)} className="grn_table_link">View  </a>
                            <a href="#" onClick={evt => this.handleEditChange(evt, project.projectid)} className="grn_table_link">Edit  </a>
                            <a href="#" onClick={evt => this.handleDeleteChange(evt, project.projectid)} className="grn_table_link">Delete</a>
                          </td>
                        </tr>);

                    })}
                  </tbody>
                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" className="page-link">6</a></li><li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" className="page-link">Next</a></li></ul></div></div></div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerProjectsList;