import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';

class AssetDetailsTabParts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeout: 300,
            parts: this.props.parts
        };

        this.options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: false,
            alwaysShowAllBtns: false,
            withFirstAndLast: true,
            stateSave: true
        }

        this.editProp = {
            mode: 'click',
            blurToEscape: true
        }


    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/work_orders/`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ a: data })
            })
            .catch(console.log)
    }

    render() {
        console.log(this.state.parts)
        return (
            <div className="animated">
              <BootstrapTable data={this.state.parts} version="4" striped hover pagination search options={this.options} cellEdit={this.editProp}>
                <TableHeaderColumn hidden isKey dataField="id">ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="part_number" dataSort >Part #</TableHeaderColumn>
                    <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="current_on_hand" dataSort>On Hand</TableHeaderColumn>
                    <TableHeaderColumn dataField="" dataSort>On Reserve</TableHeaderColumn>
                    <TableHeaderColumn dataField="reorder_point" dataSort>Reorder Point</TableHeaderColumn>
                    <TableHeaderColumn dataField="max_on_hand" dataSort>Max on Hand</TableHeaderColumn>
                  </BootstrapTable>
            </div>
        );
    }
}

export default AssetDetailsTabParts
