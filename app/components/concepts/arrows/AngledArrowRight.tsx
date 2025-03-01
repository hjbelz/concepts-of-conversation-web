import React from "react";

export interface AngledArrowRightProps {
  x: number;
  y: number;
  vLength: number;
  hLength: number;
  children?: React.ReactNode;
}

export const AngledArrowRight = ({
  x,
  y,
  vLength,
  hLength,
  children,
}: AngledArrowRightProps): React.JSX.Element => {
  const viewBoxWidth = hLength + 35; // Adjust viewBox width based on hLength
  const viewBoxHeight = vLength + 44; // Adjust viewBox height based on vLength
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
        height={viewBoxHeight}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="22" height={vLength} fill="#D1E4FF" />
        <rect x="0" y={vLength} width={hLength} height="22" fill="#D1E4FF" />
        <path
          d="M34.5 31.1768L0 0L0 62.3538L34.5 31.1768Z"
          fill="#D1E4FF"
          transform={`translate(${hLength}, ${vLength - 20})`}
        />
      </svg>
      <div
        style={{
          textAlign: "left",
          marginTop: "0px",
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

export default AngledArrowRight;
