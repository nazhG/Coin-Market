import { use, useEffect, useState } from "react";
import Table from "../utils/table";
import Loader from "../utils/loader";

export const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/admin/users")
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
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-white p-8 rounded shadow-md h-4/5">
        <h1 className="text-2xl font-semibold mb-14 text-gray-950">Users</h1>
        {loading ? (
          <Loader />
        ) : (
          <Table
            data={data}
            titles={["User Name", "Password", "Email"]}
            items={["userName", "password", "email"]}
          />
        )}
      </div>
    </div>
  );
};
