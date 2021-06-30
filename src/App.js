import React from "react";
import CardAvg from "./components/CardAvg";
import TableCustomers from "./components/TableCustomers";
import { Typography } from "antd";
import Chart from "./components/Chart";
import { Row, Col } from "antd";
import { Layout } from "antd";

const { Title } = Typography;
const App = () => {
  return (
    <div style={{padding:'30px'}}>
      <Row>
        <Col lg={24}>
          <div style={{ textAlign: "center" }}>
            <Title style={{color:'white'}}>Reto ReactJS</Title>
          </div>{" "}
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          {" "}
          <CardAvg />
        </Col>
        <Col lg={12}>
          {" "}
          <Chart />
        </Col>
      </Row>
    
      
          {" "}
          <TableCustomers />
      
     
    </div>
  );
};

export default App;
