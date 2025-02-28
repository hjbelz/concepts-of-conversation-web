import React from "react";

export interface ArrowDownProps {
  x: number;
  y: number;
  length?: number;
  children?: React.ReactNode;
}

export const ArrowDown = ({
  x,
  y,
  length = 85,
  children,
}: ArrowDownProps): React.JSX.Element => {
  const viewBoxHeight = length + 34; // Adjust viewBox height based on length
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: x,
        top: y,
      }}
    >
      <svg
        width="63"
        height={viewBoxHeight}
        viewBox={`0 0 63 ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="20" y="0" width="22" height={length} fill="#D1E4FF" />
        <path
          d="M31.1768 34.5L0 0L62.3538 0L31.1768 34.5Z"
          fill="#D1E4FF"
          transform={`translate(0, ${length})`}
        />
      </svg>
      <div
        style={{
          textAlign: "center",
          marginTop: "4px",
          fontStyle: "italic",
          color: "#608DCC",
          fontWeight: "300",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ArrowDown;
