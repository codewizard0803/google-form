import React from "react";
import classnames from 'classnames'


const RadioFollowUp = ({ title, onChange, error, options, checked }) => {
  return (
    <div className="w-[95%] mx-auto p-2 shadow-lg">
      <p className="text-left text-[23px]">
        {title}
      </p>
      <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
      <div
        className={classnames("mt-5 p-2", {
          "border-red-500 border": error,
        })}
      >
        {options.map((item, index) => (
          <div className="text-left mt-1" key={index}>
            <label key={item.value}>
              <input
                type="radio"
                name={item.name}
                value={item.value}
                className="mr-2"
                checked={checked === item.value}
                onChange={onChange}
              />
              {item.label}
            </label>
          </div>
        ))}
      </div>

      {error && (
        <div className="text-red-500 text-left text-[12px] mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default RadioFollowUp;
