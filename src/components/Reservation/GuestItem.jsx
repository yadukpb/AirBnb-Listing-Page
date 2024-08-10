import React from "react";

const GuestItem = ({
  title,
  description,
  count,
  setCount,
  min = 0,
  max = 10,
}) => {
  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const decrement = () => {
    if (count > min) setCount(count - 1);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="text-sm">
        <div className="font-semibold">{title}</div>
        <div className="text-gray-500">{description}</div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={decrement}
          className="text-lg font-bold border rounded-full w-8 h-8 flex items-center justify-center"
        >
          −
        </button>
        <span>{count}</span>
        <button
          onClick={increment}
          className="text-lg font-bold border rounded-full w-8 h-8 flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestItem;
