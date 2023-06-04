import React from "react";
import classnames from "classnames";

const TextFollowUp = ({ title, onChange, error, value, name }) => {
  return (
    <div className="w-[95%] mx-auto p-3  shadow-lg ">
      <p className="text-left text-[20px] mt-2">{title}</p>
      <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
      <div className="mt-5 p-2">
        <input
          type="text"
          className={classnames(
            "mt-2 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
            { "border-b-red-500": error }
          )}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Your answer"
        />
      </div>

      {error && (
        <div className="text-red-500 text-left text-[12px] mt-2">{error}</div>
      )}
    </div>
  );
};

export default TextFollowUp;
