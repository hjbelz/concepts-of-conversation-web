import React from "react";

export interface ArrowUpProps {
  x: number;
  y: number;
  length?: number; 
  children?: React.ReactNode;
}

export const ArrowUp = ({
  x,
  y,
  length = 62,
  children,
}: ArrowUpProps): React.JSX.Element => {
  const viewBoxHeight = length + 34; // Adjust viewBox height based on length
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
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
        <rect
          x="20"
          y={viewBoxHeight - length}
          width="22"
          height={length}
          fill="#D1E4FF"
        />
        <path d="M31.1768 0.5L0 35L62.3538 35L31.1768 0.5Z" fill="#D1E4FF" />
      </svg>
      <div
        style={{
          alignSelf: " flex-end",
          textAlign: "left",
          marginBottom: "4px",
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

export default ArrowUp;
