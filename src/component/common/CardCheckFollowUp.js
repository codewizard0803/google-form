import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import classnames from "classnames";

const CardCheckFollowUp = ({
  title,
  options,
  options2,
  errors,
  checked,
  onChange,
  onChange2,
  onChange3,
  type2,
  errors2,
  value3,
  type,
  name3,
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
                    checked?.filter((p) => p.condition === item.value).length >
                    0
                  }
                  onChange={onChange}
                />
                {item.label}
              </label>
              {((Array.isArray(checked) &&
                checked?.filter((p) => p.condition === item.value).length >
                  0) ||
                checked === item.value) &&
              options2 ? (
                item.value !== "Other" ? (
                  <div className="flex justify-between  flex-wrap	 p-4">
                    {options2?.map((item2, index2) => (
                      <div className="" key={index2}>
                        <label key={item2.value}>
                          <input
                            type={type2}
                            name={item.name}
                            value={item2.value}
                            checked={
                              checked?.filter(
                                (p) =>
                                  p.effect === item2.value &&
                                  p.condition === item.label
                              ).length > 0
                            }
                            className="mr-2"
                            onChange={onChange2}
                          />
                          {item2.label}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 p-2">
                    <input
                      type="text"
                      className={classnames(
                        "mt-2 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                        {
                          "border-b-red-500": errors2,
                        }
                      )}
                      name={name3}
                      value={value3}
                      onChange={onChange3}
                      placeholder="Your answer"
                    />
                    {errors2 && (
                      <div className="text-red-500 text-left text-[12px] mt-2">
                        {errors2}
                      </div>
                    )}
                  </div>
                )
              ) : null}
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

export default CardCheckFollowUp;
