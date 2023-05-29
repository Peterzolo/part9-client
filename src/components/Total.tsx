import React from "react";

interface ITotal {
  total: number;
}

const Total: React.FC<ITotal> = ({ total }) => {
  return (
    <div>
      <h3>Total Exercises</h3>
      <p>{total}</p>
    </div>
  );
};

export default Total;
