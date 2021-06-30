import { useEffect, useState } from "react";
import customerApi from "../api/customerApi";

const useCustomers = () => {
  const [loadingCustomer, setloadingCustomer] = useState(true);
  const [customers, setcustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    let res = await customerApi.get("/customers");

    if (res.status === 200) {
      setcustomers(res.data);
    }
    setloadingCustomer(false);
  };

  return { customers, loadingCustomer };
};

export default useCustomers;
