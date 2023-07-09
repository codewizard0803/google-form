/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import { toast } from "react-toastify";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const APP_URL = process.env.REACT_APP_API_BASE_URL;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  useEffect(() => {
    axios.get(`${APP_URL}/api/dashboard`).then((res) => {
      setData(res.data);
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleDelete = (fileName) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let zipFileName = { zipFileName: fileName };

      axios.post(`${APP_URL}/api/deleteFile`, zipFileName).then((res) => {
        if (res?.data === "Success") {
          axios.get(`${APP_URL}/api/dashboard`).then((datas) => {
            setData(datas.data);
            toast.success("Success Deleted", {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        } else {
          toast.error("I can't find this file.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col m-10">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    FileName
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems?.map((file, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {(currentPage - 1) * itemsPerPage + index + 1}{" "}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-400">
                      <a href={`${APP_URL}/downloads/${file.fileName}`}>
                        {file.fileName}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {file.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleDelete(file.fileName)}
                      >
                        <DeleteIcon sx={{ color: "red" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        className="mt-4"
      />
    </div>
  );
};

export default DashBoard;
