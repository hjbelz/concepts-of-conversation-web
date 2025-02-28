import React from "react";

export interface ArrowDownProps {
  x: number;
  y: number;
  length: number;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ x, y, length }) => {
  const viewBoxHeight = length + 34; // Adjust viewBox height based on length
  return (
    <svg
      width="63"
      height={viewBoxHeight}
      viewBox={`0 0 63 ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: x, top: y }}
    >
      <rect x="20" y="0" width="22" height={length} fill="#D1E4FF" />
      <path d="M31.1768 34.5L0 0L62.3538 0L31.1768 34.5Z" fill="#D1E4FF" transform={`translate(0, ${length})`} />
    </svg>
  );
};

export default ArrowDown;
