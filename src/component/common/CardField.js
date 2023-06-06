import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import classnames from "classnames";

const CardCheckField = ({
  title,
  options,
  errors,
  checked,
  onChange,
  type,
}) => {
  return (
    <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, textAlign: "left" }}>
          {title}
        </Typography>
        <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
        <div
          className={classnames("mt-5 p-2", {
            "border-red-500 border": errors,
          })}
        >
          {options.map((item, index) => (
            <div className="text-left" key={index}>
              <label key={item.value}>
                <input
                  type={type}
                  name={item.name}
                  value={item.value}
                  className="mr-2"
                  checked={
                    type === "checkbox"
                      ? checked?.includes(item.label)
                      : checked === item.value
                  }
                  onChange={onChange}
                />
                {item.label}
              </label>
            </div>
          ))}
        </div>
        {errors && (
          <div className="text-red-500 text-left text-[12px] mt-2">
            {errors}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CardCheckField;
