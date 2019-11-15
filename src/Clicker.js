import React, { useState } from "react";
import "./Clicker.css";
import DECREASE_ICON from "./assets/decrease.svg";
import PLUS_ICON from "./assets/plus.svg";
import REFRESH_ICON from "./assets/refresh.svg";

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
          <img src={PLUS_ICON} alt="plus" />
        </div>
        <div className="btn-orange" onClick={handleRefresh}>
          <img src={REFRESH_ICON} alt="refresh" />
        </div>
        <div className="btn-red" onClick={handleDecrease}>
          <img src={DECREASE_ICON} alt="decrease" />
        </div>
      </div>
    </div>
  );
}
