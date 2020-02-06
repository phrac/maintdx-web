import React from 'react';
import { Card, CardBody, CardHeader, Table, Col, Row, } from 'reactstrap';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const PROPERTIES = gql`
query asset($id: ID!){
  asset(id: $id) {
    name
    properties
  }
}
`;

function AssetDetailsTabInfo({ id }) {
  const { loading, error, data } = useQuery(PROPERTIES, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading properties</p>;

  const props = Object.entries(JSON.parse(data.asset.properties)).map(([k, v]) => {
      return (
        <tr key={k}>
          <td>{k}</td>
          <td>{v}</td>
          <td align="right">
            <i className="cui-note"></i>&nbsp;&nbsp;
            <i className="cui-circle-x"></i>
          </td>
        </tr>
      );
    })

  return (
      <Row>
        <Col xs="8" lg="8">
          <Card>
            <CardHeader>
              <i className="fa fa-info"></i> {data.asset.name} Properties
              <div className="card-header-actions">
                <div className="card-header-action btn btn-setting">
                  <i className="icon-note"></i>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <Table responsive striped size="sm">
                <tbody>
                  {props}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

export default AssetDetailsTabInfo
