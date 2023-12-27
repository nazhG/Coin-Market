// components/TablePagination.tsx
import { useState } from "react";

declare interface TableProps {
  data: any[];
  titles: string[];
  items: string[];
}

const Table = ({ data, titles, items }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="my-8 text-gray-950 h-5/6 flex flex-col justify-between">
      {data.length === 0 ? (
        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200 p-8 rounded shadow-md max-w-lg">
            <h1 className="text-2xl font-semibold mb-4">No hay datos</h1>
          </div>
        </div>
      ) : (
        <>
          <table className="min-w-full">
            <thead>
              <tr>
                {titles.map((value: any) => (
                  <th className="px-4 py-2 border" key={value}>
                    {value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item: any) => (
                <tr key={item["id"]}>
                  {items.map((value: any) => (
                    <td className="px-4 py-2 border" key={value}>
                      {item[value]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Anterior
            </button>
            <span className="text-gray-700">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
