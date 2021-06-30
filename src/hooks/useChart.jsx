import moment from "moment";
import { useEffect, useState } from "react";
import customerApi from "../api/customerApi";

const useChart = () => {
  const [loadingCustomer, setloadingCustomer] = useState(true);
  const [customers, setcustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getDatachart = (customers) => {
    let data = [];
    let max = 0,
      min = 0;
    customers.forEach((e) => {
      let years = moment().diff(e.birth_date, "years");

      console.log(years);
      if (years >= 18) {
        max++;
      } else {
        min++;
      }
    });
    data.push({ Mayores: max, Menores: min, name: "Clientes" });

    return data;
  };

  const getCustomers = async () => {
    let res = await customerApi.get("/customers");

    if (res.status === 200) {
      setcustomers(getDatachart(res.data));
      console.log(getDatachart(res.data));
    }
    setloadingCustomer(false);
  };

  return { customers, loadingCustomer };
};

export default useChart;
