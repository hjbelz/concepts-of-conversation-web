import React from "react";

export interface ArrowRightProps {
  x: number;
  y: number;
  length?: number;
  children?: React.ReactNode;
}

export const ArrowRight = ({
  x,
  y,
  length = 85,
  children,
}: ArrowRightProps): React.JSX.Element => {
  const viewBoxWidth = length + 34; // Adjust viewBox width based on length
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
        width={viewBoxWidth}
        height="63"
        viewBox={`0 0 ${viewBoxWidth} 63`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="20" width={length} height="22" fill="#D1E4FF" />
        <path
          d="M34.5 31.1768L0 0L0 62.3538L34.5 31.1768Z"
          fill="#D1E4FF"
          transform={`translate(${length}, 0)`}
        />
      </svg>
      <div
        style={{
          textAlign: "left",
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

export default ArrowRight;
