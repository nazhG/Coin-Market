import { use, useEffect, useState } from "react";
import Table from "../utils/table";
import Loader from "../utils/loader";

export const Ventas = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/admin/ventas")
      .then((res) => {
        res.json().then((data) => {
          setData(data);
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full text-sm">
      <div className="bg-white p-8 rounded shadow-md max-w-lg h-4/5 box-content">
        <h1 className="text-2xl font-semibold mb-14 text-gray-950">Users</h1>
        {loading ? (
          <Loader />
        ) : (
          <Table
            data={data}
            titles={["User Name", "Wallet to pay", "status"]}
            items={["username", "address", "estado"]}
          />
        )}
      </div>
    </div>
  );
};
