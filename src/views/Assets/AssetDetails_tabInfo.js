import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table, Col, Row, } from 'reactstrap';

class AssetDetailsTabInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 300,
    };
  }

  render() {
    const props = Object.entries(this.props.properties).map(([k, v]) => {
      return (
        <tr key={k}>
          <td>{k}</td>
          <td>{v}</td>
          <td align="right">
            <i class-Name="cui-note"></i>&nbsp;&nbsp;
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
              <i className="fa fa-info"></i> {this.props.asset_name} Properties
              <div className="card-header-actions">
                <a href="#" className="card-header-action btn btn-setting">
                  <i className="icon-note"></i>
                </a>
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
}

export default AssetDetailsTabInfo
