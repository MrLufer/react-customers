import React from "react";
import { Table } from "antd";
import useCustomers from "../hooks/useCustomers";
import moment from "moment";

const columns = [
  {
    title: "Nombre",
    dataIndex: "first_name",
    key: "customer_id",
  },
  {
    title: "Apellido",
    dataIndex: "last_name",
    key: "customer_id",
  },
  {
    title: "Fecha de Nacimiento",
    dataIndex: "birth_date",
    key: "customer_id",
    render: (value) => <>{moment(value).format("YYYY-MM-DD")}</>,
  },
];
const TableCustomers = () => {
  const { customers, loadingCustomer } = useCustomers();
  return (
    <>
      <Table
        loading={loadingCustomer}
        dataSource={customers}
        columns={columns}
      />
      ;
    </>
  );
};

export default TableCustomers;
