import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const ASSET = gql`
  query asset($id: ID!) {
    asset(id: $id) {
      name
      serialNumber
      make
      model
      imageUrl
      department {
        name
      }
      category {
        name
      }
      installDate
      assetGroups {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

function AssetCard({ id }) {
  const { loading, error, data } = useQuery(ASSET, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading assets</p>;

  return (
    <Card>
      <CardHeader>
        <b>{data.asset.name}</b>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs="4" sm="3" md="3">
            <img
              alt={data.asset.name}
              className="img-thumbnail"
              src={data.asset.imageUrl}
            />
          </Col>
          <Col xs="8" sm="9" md="9">
            <Row>
              <Col xs="5" sm="5" md="5">
                <dl className="row">
                  <dt className="col-sm-4">Category</dt>
                  <dd className="col-sm-8">{data.asset.category.name}</dd>
                  <dt className="col-sm-4">Make</dt>
                  <dd className="col-sm-8">{data.asset.make}</dd>
                  <dt className="col-sm-4">Model</dt>
                  <dd className="col-sm-8">{data.asset.model}</dd>
                  <dt className="col-sm-4">Serial #</dt>
                  <dd className="col-sm-8">{data.asset.serialNumber}</dd>
                  <dt className="col-sm-4">Install Date</dt>
                  <dd className="col-sm-8">{data.asset.installDate}</dd>
                  <dt className="col-sm-4">Department</dt>
                  <dd className="col-sm-8">{data.asset.department.name}</dd>
                </dl>
              </Col>
              <Col xs="6" sm="6" md="6">
                <Row>
                  <Col xs="12" sm="6" lg="6"></Col>
                  <Col xs="12" sm="6" lg="6"></Col>
                </Row>
                <Row></Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default AssetCard;
