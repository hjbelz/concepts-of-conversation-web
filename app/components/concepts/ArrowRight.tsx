import React from "react";

export interface ArrowRightProps {
  x: number;
  y: number;
  length: number;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ x, y, length }) => {
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
      <rect x="0" y="20" width={length} height="22" fill="#D1E4FF" />
      <path d="M34.5 31.1768L0 0L0 62.3538L34.5 31.1768Z" fill="#D1E4FF" transform={`translate(${length}, 0)`} />
    </svg>
  );
};

export default ArrowRight;
