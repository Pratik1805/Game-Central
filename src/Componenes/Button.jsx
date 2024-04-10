import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-secondary rounded-md px-4 py-3 text-white font-palanquin text-2xl hover:bg-orange-500 hover:border-orange-200 hover:border-2">
      {label}
    </button>
  );
};

export default Button;
