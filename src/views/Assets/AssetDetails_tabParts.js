import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const PARTS = gql`
query asset($id: ID!){
  asset(id: $id) {
    name
    parts{
      edges{
        node{
          id
          partNumber
          description
          onHand
          reorderPoint
          maxOnHand
        }
      }
    }
  }
}
`;

function AssetDetailsTabParts({ id }) {
    var options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: false,
            alwaysShowAllBtns: false,
            withFirstAndLast: true,
            stateSave: true
        }

        var editProp = {
            mode: 'click',
            blurToEscape: true
        }
    const { loading, error, data } = useQuery(PARTS, { variables: { id } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading properties</p>;

    const parts = data.asset.parts.edges.map(node => node.node);

    return (
        <div className="animated">
            <BootstrapTable data={parts} version="4" striped hover pagination search options={options} cellEdit={editProp}>
                <TableHeaderColumn hidden isKey dataField="id">ID</TableHeaderColumn>
                <TableHeaderColumn dataField="partNumber" dataSort>Part #</TableHeaderColumn>
                <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                <TableHeaderColumn dataField="onHand" dataSort>On Hand</TableHeaderColumn>
                <TableHeaderColumn dataField="" dataSort>On Reserve</TableHeaderColumn>
                <TableHeaderColumn dataField="reorderPoint" dataSort>Reorder Point</TableHeaderColumn>
                <TableHeaderColumn dataField="maxOnHand" dataSort>Max on Hand</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default AssetDetailsTabParts
