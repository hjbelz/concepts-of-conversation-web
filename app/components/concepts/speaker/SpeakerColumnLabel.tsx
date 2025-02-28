import React from "react";
import SpeakerIcon from "./Speaker.svg";
import RecipientsIcon from "./Recipients.svg";


export const Icons: Record<string, string> = {
  "Speaker": SpeakerIcon,
  "Recipients": RecipientsIcon,
};

export interface SpeakerColumnLabelProps {
  icon?: "Speaker" | "Recipients";
  children?: React.ReactNode;
  colIndex: 1 | 2 | 3;
  y: number;
}

const colPositions = [40, 624, 1208];

export const SpeakerColumnLabel = ({
  icon = "Speaker",
  children,
  colIndex,
  y,
}: SpeakerColumnLabelProps): React.JSX.Element => {
  const x = colPositions[colIndex - 1];
  
  const IconComponent = Icons[icon];

  return (
    <div
      style={{
        width: "440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: x,
        top: y,
        gap: "4px",
      }}
    >
      <div>
        <img src={IconComponent} alt="Speaker" style={{
          height: "64px",
        }} />
      </div>
      <div
        style={{
          color: "#608DCC",
          fontWeight: "300",
          fill: "#D1E4FF",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SpeakerColumnLabel;
