import React from "react";
import { Card, Typography, CardContent } from "@mui/material";

const TableCheckBox = ({ thead, tbody, onChange, title }) => {
  return (
    <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, textAlign: "left" }}>
          {title}
        </Typography>
        <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
        <table className="w-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {thead?.map((item, index) => (
                <th key={index} className="p-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tbody?.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                {thead?.map((item2, index2) =>
                  index2 === 0 ? (
                    <td key={index2}>{item}</td>
                  ) : (
                    <td key={index2}>
                      <input
                        type="radio"
                        name={item}
                        value={item2}
                        onChange={onChange}
                      />
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default TableCheckBox;
