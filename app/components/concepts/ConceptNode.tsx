import React from "react";
import "./ConceptNode.css";

// Icons used in the ConceptNode component for key concepts.
import ActionIcon from "./icons/Action.svg";
import AdjacencyPairIcon from "./icons/Adjacency Pair.svg";
import ConversationIcon from "./icons/Conversation.svg";
import EpistemicsIcon from "./icons/Epistemics.svg";
import InstitutionalIcon from "./icons/Institutional.svg";
import IntersubjectivityIcon from "./icons/Intersubjectivity.svg";
import ProjectIcon from "./icons/Project.svg";
import SequenceIcon from "./icons/Sequence.svg";
import TCUIcon from "./icons/TCU.svg";
import TurnIcon from "./icons/Turn.svg";
import UndefinedIcon from "./icons/Undefined.svg";  // Placeholder icon, if no icon is provided for a key concept.

export const Icons: Record<string, string> = {
  "Action": ActionIcon,
  "AdjacencyPair": AdjacencyPairIcon,
  "Conversation": ConversationIcon,
  "Epistemics": EpistemicsIcon,
  "Institutional": InstitutionalIcon,
  "Intersubjectivity": IntersubjectivityIcon,
  "Project": ProjectIcon,
  "Sequence": SequenceIcon,
  "TCU": TCUIcon,
  "Turn": TurnIcon,
  "Undefined": UndefinedIcon,
};

export enum Phenomenon {
  Observable = "observable",
  Cognitive = "cognitive",
  Trouble = "trouble",
}

export interface ConceptNodeProps {
  phenomenon?: Phenomenon;
  title: string;
  titleVariant?: string;
  subtitle: string;
  isKeyConcept?: boolean;
  icon?: string;
  emcaUrl?: string;
  x: number;
  y: number;
  children: React.ReactNode;
}

const ConceptNode = ({
  phenomenon = Phenomenon.Observable,
  isKeyConcept = false,
  icon = "Undefined",
  title,
  titleVariant,
  subtitle,
  emcaUrl,
  x,
  y,
  children,
}: ConceptNodeProps): React.JSX.Element => {
  let stateSuffix = `${phenomenon}${isKeyConcept ? "--key-concept" : ""}`;
  let iconResource =
    Icons[icon] !== undefined ? Icons[icon] : Icons["Undefined"];

  let headerBox = (
    <div className="concept-node__header-box">
      {isKeyConcept && (
        <img
          className="concept-node__icon"
          src={iconResource}
          alt={phenomenon}
        />
      )}
      <div className="concept-node__title-rows">
        <h2>
          <span className={`concept-node__title--${stateSuffix}`}>{title}</span>
          &nbsp;
          {titleVariant && (
            <span className={`concept-node__title-variant--${stateSuffix}`}>
              ({titleVariant})
            </span>
          )}
        </h2>
        <h3>
          <span className={`concept-node__subtitle--${stateSuffix}`}>
            {subtitle}
          </span>
        </h3>
      </div>
    </div>
  );

  if (emcaUrl) {
    headerBox = (
      <a href={emcaUrl} className="concept-node__emca-link">
        {headerBox}
      </a>
    );
  }

  return (
    <div className={`concept-node--${stateSuffix}`} style={{position: "absolute", left: x, top: y}}>
      {headerBox}
      <div className={`concept-node__text-box--${stateSuffix}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ConceptNode;
