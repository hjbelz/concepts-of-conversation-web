import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";

export function CAConceptsOverviewColSequence() {
  return (
    <div className="relative h-[657px] w-[1648px] bg-gray-100">
      <ConceptNode
        title="Sequence Organization"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Sequence_organization"
        colIndex={2}
        y={60}
      >
        Some concise information
      </ConceptNode>
      <ConceptNode
        title="Sequence"
        subtitle="A sequence of turns by alternating speakers"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={true}
        icon="Sequence"
        emcaUrl="https://emcawiki.net/Sequence"
        colIndex={2}
        y={269}
      >
        Some concise information
      </ConceptNode>
      <ConceptNode
        title="Preference Organization"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Preference_organization"
        colIndex={3}
        y={60}
      >
        Some concise information
      </ConceptNode>
      <ConceptNode
        title="Intersubjectivity"
        subtitle="Shared understanding of the participants"
        phenomenon={Phenomenon.Cognitive}
        isKeyConcept={true}
        icon="Intersubjectivity"
        emcaUrl="https://emcawiki.net/Intersubjectivity"
        colIndex={1}
        y={491}
      >
        Some concise information
      </ConceptNode>
      <ConceptNode
        title="Adjacency Pair"
        subtitle="Two-part exchange (initial first and replying second part)"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={true}
        icon="AdjacencyPair"
        emcaUrl="https://emcawiki.net/Adjacency_pair"
        colIndex={2}
        y={491}
      >
        Some concise information
      </ConceptNode>
      <ConceptNode
        title="Next Turn Proof Procedure"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Trouble}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Next-turn_proof_procedure"
        colIndex={3}
        y={491}
      >
        Some concise information
      </ConceptNode>{" "}
    </div>
  );
}
