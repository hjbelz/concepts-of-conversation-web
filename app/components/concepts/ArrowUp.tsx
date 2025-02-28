import React from "react";

export interface ArrowUpProps {
  x: number;
  y: number;
  length: number;
}

const ArrowUp: React.FC<ArrowUpProps> = ({ x, y, length }) => {
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
      <rect x="20" y={viewBoxHeight - length} width="22" height={length} fill="#D1E4FF" />
      <path d="M31.1768 0.5L0 35L62.3538 35L31.1768 0.5Z" fill="#D1E4FF" />
    </svg>
  );
};

export default ArrowUp;
