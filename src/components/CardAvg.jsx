import React, { useEffect, useState } from "react";
import { Card } from "antd";
import customerApi from "../api/customerApi";
const CardAvg = () => {
  const [avg, setavg] = useState("....");
  useEffect(() => {
    getAvg();
  }, []);

  const getAvg = async () => {
    let res = await customerApi.get("/avg");
    if (res.status === 200) {
      setavg(`${res.data.avg.years} años`);
    }
  };

  return (
    <div style={{ marginTop: "10px", textAlign:'center',width:'100%'}} >
      <Card
        title="Promedio edad entre todos los clientes"
        style={{ width: 500, height: 300 }}
      >
        <h1 style={{ fontSize: "15" }}>{avg}</h1>
      </Card>{" "}
    </div>
  );
};

export default CardAvg;
