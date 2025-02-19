import { react, useEffect } from "react";

export default function Stepper({ percentage }) {
  return (
    <div className="Stepper-body">
      <span style={{ color: percentage > 50 ? "White" : "Black" }}>
        {percentage}
      </span>
      <div
        className="Fill-Color"
        // style={{ width: `${percentage}%` }}
        //reduces complexity
        style={{
          transform: `scaleX(${percentage}%)`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      ></div>
    </div>
  );
}
