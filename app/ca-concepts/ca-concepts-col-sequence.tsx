import ArrowDown from "~/components/concepts/arrows/ArrowDown";
import ArrowLeft from "~/components/concepts/arrows/ArrowLeft";
import ArrowRight from "~/components/concepts/arrows/ArrowRight";
import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";

export function CAConceptsOverviewColSequence() {
  return (
    <div className="relative h-[657px] w-[1648px] bg-gray-100">

      {/*  Sequence Organization => Sequence */}
      <ArrowDown x={800} y={168}>
        shapes the<br />
        <b>Sequence</b>
      </ArrowDown>

      {/*  Sequence => Adjacency Pair */}
      <ArrowDown x={800} y={377}>
        mostly consists of<br />
        variants and expansions of<br />
        the base <b>Adjacency Pair</b>
      </ArrowDown>


      {/*  Intersubjectivity <= Adjacency Pair */}
      <ArrowLeft x={492} y={499}>
        continuously<br />
        validates the<br />
        <b>Intersubjectivity</b>
      </ArrowLeft>


        {/* TCU => TRP */}
      <ArrowRight x={1076} y={499}>
        base structure<br />
        for the<br />
        <b>Next Turn Proof Procedure</b>
      </ArrowRight>


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
