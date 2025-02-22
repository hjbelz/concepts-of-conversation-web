import React from 'react';
import './ConceptNode.css';

interface ConceptNodeProps {
  title: string;
  titleVariant?: string;
  subtitle: string;
  children: React.ReactNode;
}

const ConceptNode: React.FC<ConceptNodeProps> = ({ title, titleVariant, subtitle, children }) => {


  return (
    <div className="concept-node">
      <div className="concept-node__header-box">
        <h2 className="concept-node__title">{title} {titleVariant && <span className="concept-node__title-variant">({titleVariant})</span>}</h2>
        <h3 className="concept-node__subtitle">{subtitle}</h3>
      </div>
      <div className="concept-node__text-box">
        <p>{children}</p>
      </div>
    </div>
  ); 
}; 

export default ConceptNode;