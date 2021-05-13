import React, { Component, Suspense } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import AssetCard from "./assetDetails_query";

const AssetDetailsTabInfo = React.lazy(() => import("./AssetDetails_tabInfo"));
const AssetDetailsTabParts = React.lazy(() =>
  import("./AssetDetails_tabParts")
);

class AssetDetails extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      activeTab: new Array(10).fill("1"),
    };
  }

  toggleFade() {
    this.setState((prevState) => {
      return { fadeIn: !prevState };
    });
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xs="12" sm="12" md="12">
            <AssetCard id={this.props.match.params.id} />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="12" className="mb-4">
            <CCard>
              <CCardBody>
                <CTabs>
                  <CNav variant="tabs">
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cil-spreadsheet" /> Info
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cil-paperclip" /> Attachments
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cil-notes" /> Notes
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cil-task" /> Work Orders
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cilFilter" /> PMs
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cilSettings" /> Parts
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cil-money" /> Vendors
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cil-graph" /> Reports
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        <CIcon name="cil-memory" /> Sensors
                      </CNavLink>
                    </CNavItem>
                  </CNav>

                  <CTabContent>
                    <CTabPane>
                      <Suspense fallback="loading">
                        <AssetDetailsTabInfo id={this.props.match.params.id} />
                      </Suspense>
                    </CTabPane>
                    <CTabPane></CTabPane>
                    <CTabPane></CTabPane>
                    <CTabPane></CTabPane>
                    <CTabPane></CTabPane>

                    <CTabPane>
                      <Suspense fallback="loading">
                        <AssetDetailsTabParts id={this.props.match.params.id} />
                      </Suspense>
                    </CTabPane>
                    <CTabPane></CTabPane>
                    <CTabPane></CTabPane>
                    <CTabPane></CTabPane>
                  </CTabContent>
                </CTabs>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default AssetDetails;
