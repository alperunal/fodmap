import React from "react";
import { Row, Col } from "antd";
import "./Food.css";

const food = props => {
  return (
    <div className="Food">
      <Row />
      <Row gutter={16}>
        <Col span={8}>Fructose</Col>
        <Col span={8}>Lactose</Col>
        <Col span={8}>Mannitol</Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>Sorbitol</Col>
        <Col span={8}>GOS</Col>
        <Col span={8}>Fructan</Col>
      </Row>
    </div>
  );
};

export default food;
