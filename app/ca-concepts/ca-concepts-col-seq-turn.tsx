import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";

export function CAConceptsOverviewColSeqTurn() {
  return (
    <div className="relative h-[445px] w-[1648px] bg-gray-100">
      <ConceptNode
        title="Epistemics"
        subtitle="The distribution and the rights to knowledge"
        phenomenon={Phenomenon.Cognitive}
        isKeyConcept={true}
        icon="Epistemics"
        emcaUrl="https://emcawiki.net/Epistemics"
        colIndex={1}
        y={60}
      >
        How knowledgeable participants are relative to each other (regarding the
        current topic of conversation) plays a major role in shaping their turns
        at talk and the sequential progression of the conversation. For example,
        when giving a diagnosis, a doctor will present the same information
        differently to a patient than to another medical expert. Sharing
        exciting news will fizzle abruptly, if it turns out that the others are
        already aware of it. Additionally, participants actively monitor and
        defend their ‘domains of knowledge’, such as personal experiences,
        social affiliations and areas of expertise.
      </ConceptNode>

      <ConceptNode
        title="Recipient Design"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Recipient_design"
        colIndex={2}
        y={60}
      >
        Some concise information
      </ConceptNode>

      <ConceptNode
        title="(Conversation) Trouble"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Trouble}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Conversation_trouble"
        colIndex={3}
        y={60}
      >
        See Schegloff 2007 & Sacks 1974
      </ConceptNode>

      <ConceptNode
        title="Repair"
        subtitle="(in same turn or subsequent turns)"
        phenomenon={Phenomenon.Trouble}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Repair"
        colIndex={3}
        y={288}
      >
        Some concise information
      </ConceptNode>
    </div>
  );
}
