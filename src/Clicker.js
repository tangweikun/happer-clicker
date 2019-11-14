import React, { useState } from "react";
import "./Clicker.css";

export function Clicker() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleRefresh() {
    setCount(0);
  }

  return (
    <div className="clicker-wrapper">
      <div className="clicker-display">{count}</div>
      <div className="clicker-button-panel">
        <div className="btn-green" onClick={handleAdd}>
          +
        </div>
        <div className="btn-orange" onClick={handleRefresh}>
          refresh
        </div>
        <div className="btn-red" onClick={handleDecrease}>
          -
        </div>
      </div>
    </div>
  );
}
