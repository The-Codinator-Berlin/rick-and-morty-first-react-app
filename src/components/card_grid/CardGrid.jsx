import React from "react";
import "./CardGrid.css";
function CardGrid() {
  return (
    <div className="grid grid-cols-5 gap-4 pt-1 m-4	">
      <div className="divGrid text-center">01</div>
      <div className="divGrid text-center">02</div>
      <div className="divGrid text-center">03</div>
      <div className="divGrid text-center">04</div>
      <div className="divGrid text-center">05</div>
    </div>
  );
}

export default CardGrid;
