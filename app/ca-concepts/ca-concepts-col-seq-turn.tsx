import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";
import ArrowUp from "~/components/concepts/arrows/ArrowUp";
import ArrowDown from "~/components/concepts/arrows/ArrowDown";
import ArrowLeft from "~/components/concepts/arrows/ArrowLeft";
import ArrowRight from "~/components/concepts/arrows/ArrowRight";


export function CAConceptsOverviewColSeqTurn() {
  return (
    <div className="relative h-[524px] w-[1648px] bg-gray-100">

      {/* Epistemics => Recipient Design */}
      <ArrowRight x={492} y={136}>
        informs the<br />
        <b>Recipient Design</b>
      </ArrowRight>

      {/* Sequence <= Recipient Design */}
      <ArrowUp x={800} y={0}>
        affects<br />
        <b>Sequence Organization</b>
      </ArrowUp>

      {/* Recipient Design => Turn Design */}
      <ArrowDown x={1380} y={-64} length={148}>
        uncovers<br />
        <b>Trouble</b>
      </ArrowDown>

      {/* Recipient Design => Turn Design */}
      <ArrowDown x={800} y={236} length={252}>
        affects<br />
        <b>Turn Design</b>
      </ArrowDown>

      {/* Conversation Trouble <= Repair */}
      <ArrowUp x={1380} y={236}>
        attempts to<br />
        resolve <b>Trouble</b>
      </ArrowUp>

      <ConceptNode
        title="Epistemics"
        subtitle="The distribution and the rights to knowledge"
        phenomenon={Phenomenon.Cognitive}
        isKeyConcept={true}
        icon="Epistemics"
        emcaUrl="https://emcawiki.net/Epistemics"
        colIndex={1}
        y={128}
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
        y={128}
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
        y={128}
      >
        See Schegloff 2007 & Sacks 1974
      </ConceptNode>

      <ConceptNode
        title="Repair"
        titleVariant="in same turn or subsequent turns"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Trouble}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Repair"
        colIndex={3}
        y={364}
      >
        Some concise information
      </ConceptNode>
    </div>
  );
}
