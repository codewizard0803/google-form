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
  type2,
  errors2,
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
              {((Array.isArray(checked) &&
                checked?.filter((p) => p.condition === item.value).length >
                  0) ||
                checked === item.value) &&
              options2 ? (
                <div className="flex justify-between p-4">
                  {options2?.map((item2, index2) => (
                    <div className="" key={index2}>
                      {/* {console.log(item)} */}
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
              ) : null}
              {errors2 && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors2}
                </div>
              )}
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
