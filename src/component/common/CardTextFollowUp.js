/** @format */

import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import classnames from "classnames";

const CardTextFollowUp = ({
  title,
  options,
  name,
  errors,
  checked,
  onChange,
  title2,
  errors2,
  onChange2,
  value,
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
                      ? checked?.filter((p) => p.condition === item.value)
                          .length > 0
                      : checked === item.value
                  }
                  onChange={onChange}
                />
                {item.label}
              </label>
              {type === "checkbox" ? (
                (Array.isArray(checked) &&
                  checked?.filter((p) => p.condition === item.value).length >
                    0) ||
                checked === item.value ? (
                  <div className="w-[95%] mx-auto p-3  shadow-lg ">
                    {Array.isArray(title2) ? (
                      <p className="text-left text-[20px] mt-2">
                        {title2.filter((p) => p.label === item.label)[0].title}
                      </p>
                    ) : (
                      <p className="text-left text-[20px] mt-2">{title2}</p>
                    )}
                    <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                    <div className="mt-5 p-2">
                      <input
                        type="text"
                        className={classnames(
                          "mt-2 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          {
                            "border-b-red-500": Array.isArray(errors2)
                              ? errors2?.find(
                                  (error) =>
                                    Object.keys(error)[0] === item.label
                                ) !== undefined &&
                                errors2?.find(
                                  (error) =>
                                    Object.keys(error)[0] === item.label
                                )[item.label] !== ""
                              : errors2,
                          }
                        )}
                        name={item.name}
                        defaultValue={
                          checked?.filter((p) => p.condition === item.value)
                            .length > 0
                            ? checked?.filter(
                                (p) => p.condition === item.value
                              )[0].effect
                            : ""
                        }
                        onChange={onChange2}
                        placeholder="Your answer"
                      />
                    </div>

                    {Array.isArray(errors2) ? (
                      errors2?.find(
                        (error) => Object.keys(error)[0] === item.label
                      ) === undefined ? null : (
                        errors2?.find(
                          (error) => Object.keys(error)[0] === item.label
                        )[item.label] !== "" && (
                          <div className="text-red-500 text-left text-[12px] mt-2">
                            Your Field is required
                          </div>
                        )
                      )
                    ) : (
                      <div className="text-red-500 text-left text-[12px] mt-2">
                        {errors2}
                      </div>
                    )}
                  </div>
                ) : null
              ) : checked === item.value ? (
                <div className="w-[95%] mx-auto p-3  shadow-lg ">
                  {Array.isArray(title2) ? (
                    <p className="text-left text-[20px] mt-2">
                      {title2.filter((p) => p.label === item.label)[0].title}
                    </p>
                  ) : (
                    <p className="text-left text-[20px] mt-2">{title2}</p>
                  )}
                  <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                  <div className="mt-5 p-2">
                    <input
                      type="text"
                      className={classnames(
                        "mt-2 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                        {
                          "border-b-red-500": Array.isArray(errors2)
                            ? errors2?.find(
                                (error) => Object.keys(error)[0] === item.label
                              ) !== undefined &&
                              errors2?.find(
                                (error) => Object.keys(error)[0] === item.label
                              )[item.label] !== ""
                            : errors2,
                        }
                      )}
                      name={item.name}
                      value={value}
                      onChange={onChange2}
                      placeholder="Your answer"
                    />
                    <div className="text-red-500 text-left text-[12px] mt-2">
                      {errors2}
                    </div>
                  </div>
                </div>
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

export default CardTextFollowUp;
