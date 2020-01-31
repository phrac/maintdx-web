import React, { Component, Suspense } from 'react';
import { Card, CardBody, CardHeader, Nav, NavLink, NavItem, TabContent, TabPane, Col, Row, } from 'reactstrap';
import Widget02 from '../Widgets/Widget02';

const AssetDetailsTabInfo = React.lazy(() => import ('./AssetDetails_tabInfo'));
const AssetDetailsTabParts = React.lazy(() => import ('./AssetDetails_tabParts'));

class AssetDetails extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      a: [],
      activeTab: new Array(10).fill('1')
    };
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
    console.log(this.state.activeTab);
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/assets/${this.props.match.params.id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ a: data })
      })
    .catch(console.log)

  }

  render() {
    if (!this.state.a.category) {
      return null;
    }

    return (
      <div className="animated fadeIn">
           <Row>
            <Col xs="12" sm="12" md="12">
              <Card>
                <CardHeader>
                  <b>{this.state.a.name}</b>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="4" sm="3" md="3">
                      <img alt={this.state.a.name} className="img-thumbnail" src={this.state.a.image}/>
                    </Col>
                    <Col xs="8" sm="9" md="9">
                      <Row>
                        <Col xs="5" sm="5" md="5">
                          <dl className="row">
                            <dt className="col-sm-4">Category</dt>
                            <dd className="col-sm-8">{this.state.a.category.name}</dd>
                            <dt className="col-sm-4">Make</dt>
                            <dd className="col-sm-8">{this.state.a.make}</dd>
                            <dt className="col-sm-4">Model</dt>
                            <dd className="col-sm-8">{this.state.a.model}</dd>
                            <dt className="col-sm-4">Serial #</dt>
                            <dd className="col-sm-8">{this.state.a.serial_number}</dd>
                            <dt className="col-sm-4">Install Date</dt>
                            <dd className="col-sm-8">{this.state.a.install_date}</dd>
                            <dt className="col-sm-4">Department</dt>
                            <dd className="col-sm-8">{this.state.a.department.name}</dd>
                          </dl>
                        </Col>
                        <Col xs="6" sm="6" md="6">
                          <Row>
                            <Col xs="12" sm="6" lg="6">
                              <Widget02 header="0" mainText="Open Work Orders" icon="fa fa-cogs" color="secondary" />
                              <Widget02 header="0" mainText="Open Work Orders" icon="fa fa-cogs" color="primary" />
                            </Col>
                            <Col xs="12" sm="6" lg="6">
                              <Widget02 header="0" mainText="Open Work Orders" icon="fa fa-cogs" color="primary" />
                              <Widget02 header="0" mainText="Open Work Orders" icon="fa fa-cogs" color="primary" />
                            </Col>
                          </Row>
                          <Row>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  <i className="fa fa-info"></i> Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  <i className="fa fa-file"></i> Attachments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  <i className="fa fa-sticky-note"></i> Notes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  <i className="fa fa-wrench"></i> Work Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '5'}
                  onClick={() => { this.toggle(0, '5'); }}
                >
                  <i className="fa fa-calendar"></i> PMs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '6'}
                  onClick={() => { this.toggle(0, '6'); }}
                >
                  <i className="fa fa-cog"></i> Parts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '7'}
                  onClick={() => { this.toggle(0, '7'); }}
                >
                  <i className="fa fa-group"></i> Vendors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '8'}
                  onClick={() => { this.toggle(0, '8'); }}
                >
                  <i className="fa fa-bar-chart"></i> Reports
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '9'}
                  onClick={() => { this.toggle(0, '9'); }}
                >
                  <i className="fa fa-microchip"></i> Sensors
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              <TabPane tabId="1">
                {this.state.activeTab[0] === '1' ?
                 <Suspense fallback="loading">
                 <AssetDetailsTabInfo properties={this.state.a.properties} asset_name={this.state.a.name}/>
                 </Suspense>
                 : null}
              </TabPane>

              <TabPane tabId="6">
                {this.state.activeTab[0] === '6' ?
                 <Suspense fallback="loading">
                   <AssetDetailsTabParts />
                 </Suspense>
                 : null}
              </TabPane>

            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AssetDetails;
