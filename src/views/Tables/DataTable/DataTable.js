import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {Card, CardHeader, CardBody} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';


class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {loc: []};
    
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: true
    }

    this.editProp = {
      mode: 'click',
      blurToEscape: true
    }
    
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/v1/departments/?format=json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ loc: data.results })
        console.log(this.state.loc)
      })
    .catch(console.log)
  }

  render() {

    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>Data Table{' '}
            <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
            <div className="card-header-actions">
              <a href="https://github.com/AllenFang/react-bootstrap-table" rel="noopener noreferrer" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <BootstrapTable data={this.state.loc} version="4" striped hover pagination search options={this.options} cellEdit={this.editProp}>
              <TableHeaderColumn dataField="name" dataSort dataFormat={this.nameFormat} >Name</TableHeaderColumn>
              <TableHeaderColumn isKey dataField="location">Email</TableHeaderColumn>
              <TableHeaderColumn dataField="age" dataSort>Age</TableHeaderColumn>
              <TableHeaderColumn dataField="city" dataSort>City</TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
