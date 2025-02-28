import React from "react";

export interface ArrowLeftProps {
  x: number;
  y: number;
  length: number;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ x, y, length }) => {
  const viewBoxWidth = length + 34; // Adjust viewBox width based on length
  return (
    <svg
      width={viewBoxWidth}
      height="63"
      viewBox={`0 0 ${viewBoxWidth} 63`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: x, top: y }}
    >
      <rect x="34" y="20" width={length} height="22" fill="#D1E4FF" />
      <path d="M0.5 31.1768L35 0L35 62.3538L0.5 31.1768Z" fill="#D1E4FF" />
    </svg>
  );
};

export default ArrowLeft;
