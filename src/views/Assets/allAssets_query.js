import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';

const ALL_ASSETS = gql`
query{
  allAssets{
    edges{
      node{
        id
        name
        imageUrl
        make
        model
        serialNumber
        installDate
        department{
          id
          name
        }
        category{
          id
          name
        }
      }
    }
  }
}
`;


function AllAssets() {
  const { loading, error, data } = useQuery(ALL_ASSETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading assets {error}</p>;

  return data.allAssets.edges.map(({ node: asset }) => (
    <Row>
      <Col xs="12" sm="12" md="12">
        <Card>
          <CardHeader>
            <b><Link to={`assets/${asset.id}`}>{asset.name}</Link></b>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="4" sm="3" md="3">
                <Link to={`assets/${asset.id}`}><img alt={asset.name} class="img-thumbnail" src={asset.imageUrl}/></Link>
              </Col>
              <Col xs="8" sm="9" md="9">
                <Row>
                  <Col xs="6" sm="6" md="6">
                    <dl className="row">
                      <dt className="col-sm-3">Category</dt>
                      <dd className="col-sm-9"><Link to={`assets/${asset.category.id}`}>{asset.category.name}</Link></dd>
                      <dt className="col-sm-3">Make</dt>
                      <dd className="col-sm-9">{asset.make}</dd>
                      <dt className="col-sm-3">Model</dt>
                      <dd className="col-sm-9">{asset.model}</dd>
                      <dt className="col-sm-3">Serial #</dt>
                      <dd className="col-sm-9">{asset.serialNumber}</dd>
                      <dt className="col-sm-3">Install Date</dt>
                      <dd className="col-sm-9">{asset.installDate}</dd>
                      <dt className="col-sm-3">Department</dt>
                      <dd className="col-sm-9"><Link to ={`assets/${asset.department.id}`}>{asset.department.name}</Link></dd>
                    </dl>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  ));
}

export default AllAssets;
