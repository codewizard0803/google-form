import React from "react";
import classnames from "classnames";
import { PropTypes } from "prop-types";
import { Card, Typography, CardContent } from "@mui/material";

const TextField = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  type,
  widthStyle,
  checked,
  disabled,
  title,
  props,
}) => {
  return (
    <Card
      sx={{
        width: widthStyle ? widthStyle : "65%",
        margin: "auto",
        marginTop: 3,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20, textAlign: "left" }}>
          {title}
        </Typography>
        <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
        <div className="form-group">
          <input
            type={type}
            className={classnames(
              "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
              { "border-b-red-500": error }
            )}
            placeholder={placeholder}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          {error && (
            <div className="text-red-500 text-left text-[12px] mt-2">
              {error}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
};
export default TextField;
