import React from "react";
import { Col, Card, Button } from "antd";

const CardComponent = ({ data }) => {
  return (
    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
      <Card title={data.name} style={{ width: "100%" }}>
        <p>{data.about}</p>
        <p>
          <strong>Locations:</strong> {data.locations.join(", ")}
        </p>
        <p>
          <strong>Products:</strong> {data.products.join(", ")}
        </p>
        <Button type="primary">Connect</Button>
      </Card>
    </Col>
  );
};

export default CardComponent;
