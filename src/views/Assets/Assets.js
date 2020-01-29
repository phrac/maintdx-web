import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { Link } from 'react-router-dom';

class Assets extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      a: []
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/assets/`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ a: data.results })

      })
    .catch(console.log)
  }

  render() {
    const assets =
          Object.keys(this.state.a).map((e, i) => {
            return (
              <Row>
                <Col xs="12" sm="12" md="12">
                  <Card>
                    <CardHeader>
                      <b><Link to={`assets/${this.state.a[e].id}`}>{this.state.a[e].name}</Link></b>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col xs="4" sm="3" md="3">
                          <Link to={`assets/${this.state.a[e].id}`}><img alt={this.state.a[e].name} class="img-thumbnail" src={this.state.a[e].image}/></Link>
                        </Col>
                        <Col xs="8" sm="9" md="9">
                          <Row>
                            <Col xs="6" sm="6" md="6">
                              <dl className="row">

                                <dt className="col-sm-3">Category</dt>
                                <dd className="col-sm-9"><Link to={`assets/${this.state.a[e].category.id}`}>{this.state.a[e].category.name}</Link></dd>
                                <dt className="col-sm-3">Make</dt>
                                <dd className="col-sm-9">{this.state.a[e].make}</dd>

                                <dt className="col-sm-3">Model</dt>
                                <dd className="col-sm-9">{this.state.a[e].model}</dd>

                                <dt className="col-sm-3">Serial #</dt>
                                <dd className="col-sm-9">{this.state.a[e].serial_number}</dd>

                                <dt className="col-sm-3">Install Date</dt>
                                <dd className="col-sm-9">{this.state.a[e].install_date}</dd>

                                <dt className="col-sm-3">Department</dt>
                                <dd className="col-sm-9">{this.state.a[e].department.name}</dd>
                              </dl>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )
          })
   
    return (
      <div className="animated fadeIn">
        {assets}
      </div>
    );
  }
}

export default Assets;
