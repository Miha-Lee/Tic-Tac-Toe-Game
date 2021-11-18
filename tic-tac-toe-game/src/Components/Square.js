import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div className="square-button" onClick={onClick}>
      <div className="block">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Square;
