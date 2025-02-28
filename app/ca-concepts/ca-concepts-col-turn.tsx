import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";

export function CAConceptsOverviewColTurn() {
  return (
    <div className="relative h-[1301px] w-[1648px] bg-gray-100">
      <ConceptNode
        title="Action Formation"
        subtitle="The particular way a recognizable action is 'expressed'"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Action_Formation"
        colIndex={1}
        y={219}
      >
        TODO Schegloff 2007, p. xiv, p. 263
      </ConceptNode>

      <ConceptNode
        title="Turn Design"
        subtitle="Speakers can employ a wealth of resources to construct their turn-at-talk"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Turn_Design"
        colIndex={2}
        y={219}
      >
        Speakers have a wide range of resources at their disposal to produce a
        nuanced situated turn-at-talk. These resources include choice of words,
        grammatical structures, prosody (such as intonation), timing (such as
        brief pauses), laughter, aspiration, gaze, gestures, and body
        orientation. What a speaker does with these resources in a specific turn
        is primarily shaped by three aspects: The preceding turn, the intended
        recipient(s), and the social action(s) that the speaker aims to
        accomplish.
      </ConceptNode>

      <ConceptNode
        title="Projection"
        subtitle="Predicting the course of the current turn and what is needed next"
        phenomenon={Phenomenon.Cognitive}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Projection"
        colIndex={3}
        y={219}
      >
        While listening, participants continuously monitor the current
        turn-at-talk in its production and project what action, by whom, and
        when becomes (possibly) relevant.
      </ConceptNode>

      <ConceptNode
        title="Turn"
        subtitle="A single occasion to contribute to an interaction"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={true}
        icon="Turn"
        emcaUrl="https://emcawiki.net/Turn"
        colIndex={2}
        y={561}
      >
        Some concise information
      </ConceptNode>

      <ConceptNode
        title="Turn-Taking"
        subtitle="The organization of who speaks next and when"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Turn-Taking"
        colIndex={3}
        y={561}
      >
        The organization of turn-taking enables frequent and fluent speaker
        changes with minimized gaps and overlap. The next speaker can either be
        selected by the current speaker, self-select, or the current speaker may
        continue speaking.
      </ConceptNode>

      <ConceptNode
        title="TRP"
        titleVariant="Transition Relevance Place"
        subtitle="A point where a change of speaker is relevant or possible"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Transition_Relevance_Place"
        colIndex={3}
        y={827}
      >
        Some concise information
      </ConceptNode>

      <ConceptNode
        title="Action"
        subtitle="Talk is (social) action: What is done?"
        phenomenon={Phenomenon.Cognitive}
        isKeyConcept={true}
        icon="Action"
        emcaUrl="https://emcawiki.net/Action"
        colIndex={1}
        y={827}
      >
        Saying words is not merely exchanging information. Making a request,
        offering help, or rejecting an invitation are all (social) actions
        achieved through language. So the question is, what is being done by a
        particular turn at talk? Although multiple actions can be realized by
        even a single TCU, the "primary action" is usually seen as what the
        response must deal with in order to count as an adequate next turn.
      </ConceptNode>

      <ConceptNode
        title="TCU"
        titleVariant="Turn Constructional Unit"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={true}
        icon="TCU"
        emcaUrl="https://emcawiki.net/Turn_Constructional_Unit"
        colIndex={2}
        y={827}
      >
        Some concise information
      </ConceptNode>

      <ConceptNode
        title="Action Ascription"
        subtitle="Some Subtitle"
        phenomenon={Phenomenon.Cognitive}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Action_Ascription"
        colIndex={3}
        y={1032}
      >
        Some concise information
      </ConceptNode>
    </div>
  );
}
