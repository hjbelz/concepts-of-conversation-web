import React from "react";

export interface ArrowLeftProps {
  x: number;
  y: number;
  length?: number;
  children: React.ReactNode;
}

export const ArrowLeft = ({
  x,
  y,
  length = 85,
  children,
}: ArrowLeftProps): React.JSX.Element => {
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
        <rect x="34" y="20" width={length} height="22" fill="#D1E4FF" />
        <path d="M0.5 31.1768L35 0L35 62.3538L0.5 31.1768Z" fill="#D1E4FF" />
      </svg>
      <div
        style={{
          textAlign: "right",
          marginTop: "4px",
          marginRight: "4px",
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

export default ArrowLeft;
