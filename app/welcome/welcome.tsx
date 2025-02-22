import ConceptNode from "~/components/ConceptNode";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <ConceptNode
        title="Sub Concept"
        titleVariant="TEST"
        subtitle="Some coordinated undertaking providing coherence to an interaction">
        Participants in a conversation are often engaged in a (social) activity, potentially aimed at achieving a specific outcome or goal. In this context, 'activity' can refer to anything from playing a board game or eating breakfast to making an emergency call or standing in court. Depending on the nature of the activity, some or all of it may be accomplished solely through talk.
      </ConceptNode>
    </main>
  );
}

