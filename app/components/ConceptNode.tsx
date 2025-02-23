import React from 'react';
import './ConceptNode.css';

export interface ConceptNodeProps {
  title: string;
  titleVariant?: string;
  subtitle: string;
  isKeyConcept?: boolean;
  phenomenon?: Phenomenon;
  children: React.ReactNode;
}

enum Phenomenon {
  Observable = "observable",
  Cognitive = "cognitive",
  Trouble = "trouble"
}

const ConceptNode = ({ title, titleVariant, subtitle, isKeyConcept = false, phenomenon = Phenomenon.Observable, children }: ConceptNodeProps): React.JSX.Element => {
  let stateSuffix = `${phenomenon}${isKeyConcept ? '--key-concept' : ''}`;
  return (
    <div className={`concept-node--${stateSuffix}`}>
      <div className="concept-node__header-box">
        <h2><span className={`concept-node__title--${stateSuffix}`}>{title}</span>&nbsp; 
        {titleVariant && <span className={`concept-node__title-variant--${stateSuffix}`}>({titleVariant})</span>}</h2>
        <h3><span className={`concept-node__subtitle--${stateSuffix}`}>{subtitle}</span></h3>
      </div>
      <div className={`concept-node__text-box--${stateSuffix}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ConceptNode;
