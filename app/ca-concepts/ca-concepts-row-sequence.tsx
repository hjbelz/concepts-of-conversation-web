import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";

export function CAConceptsOverviewSequence() {
  return (
    <main className="pr-4 pl-4">
      <h1 className="pt-8 pb-2 text-2xl font-black text-gray-600">
        Key Patterns And Structures of Human Talk
      </h1>
      <p className="pb-8">
        The bird's eye view on Conversation Analysis (CA): An overview of the
        conceptualization of talk-in-interaction
      </p>

      <div className="flex h-[657px] w-[1888px] flex-row gap-2">
        <div className="flex w-[232px] flex-col items-center justify-center bg-[#F0F6FF]">
          <div className="text-2xl font-bold text-sky-600">Conversation</div>
          <div className="text-center">between two or more participants</div>
        </div>

        <div className="relative h-[657px] w-[1648px] bg-gray-100">
          <ConceptNode
            title="Sequence Organization"
            subtitle="Some Subtitle"
            phenomenon={Phenomenon.Observable}
            isKeyConcept={false}
            emcaUrl="https://emcawiki.net/Sequence_organization"
            x={624}
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
            x={624}
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
            x={1208}
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
            x={40}
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
            x={624}
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
            x={1208}
            y={491}
          >
            Some concise information
          </ConceptNode>{" "}
        </div>
      </div>
    </main>
  );
}
