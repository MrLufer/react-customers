import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useChart from "../hooks/useChart";

const Chart = () => {
  const { customers, loadingCustomer } = useChart();

  return (
    <div style={{ marginTop: "10px" }}>
      <BarChart
        style={{
          backgroundColor: "white",
          paddingTop: "10px",

          marginBottom: "20px",
        }}
        width={500}
        height={300}
        data={customers}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Mayores" fill="#8884d8" />
        <Bar dataKey="Menores" fill="#FF5733" />
      </BarChart>{" "}
    </div>
  );
};

export default Chart;
