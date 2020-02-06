import React, { Component, Suspense } from 'react';
import { Card, CardBody, CardHeader, Nav, NavLink, NavItem, TabContent, TabPane, Col, Row, } from 'reactstrap';
import Widget02 from '../Widgets/Widget02';
import AssetCard from './assetDetails_query'

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
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12">
      <AssetCard id={this.props.match.params.id}/>
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
                 <AssetDetailsTabInfo id={this.props.match.params.id}/>
                 : null}
              </TabPane>

              <TabPane tabId="6">
                {this.state.activeTab[0] === '6' ?
                 <AssetDetailsTabParts id={this.props.match.params.id}/>
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
