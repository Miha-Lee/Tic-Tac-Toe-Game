import React from "react";

const Reset = ({ resetClick }) => {
  return (
    <button className="reset-button" onClick={resetClick}>
      Reset Game
    </button>
  );
};

export default Reset;
