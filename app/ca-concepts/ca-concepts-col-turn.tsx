import AngledArrowRight from "~/components/concepts/arrows/AngledArrowRight";
import ArrowDown from "~/components/concepts/arrows/ArrowDown";
import ArrowLeft from "~/components/concepts/arrows/ArrowLeft";
import ArrowRight from "~/components/concepts/arrows/ArrowRight";
import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";
import SpeakerColumnLabel from "~/components/concepts/speaker/SpeakerColumnLabel";

export function CAConceptsOverviewColTurn() {
  return (
    <div className="relative h-[1301px] w-[1648px] bg-gray-100">
      <SpeakerColumnLabel colIndex={2} y={60}>
        Current Speaker
      </SpeakerColumnLabel>

      <SpeakerColumnLabel colIndex={3} y={60} icon="Recipients">
        Current Recipients
      </SpeakerColumnLabel>

      {/* Turn <= Turn Taking */}
      <ArrowLeft x={1076} y={595}>
        observes
        <br />
        production of
        <br />
        the current <b>Turn</b>
      </ArrowLeft>

      {/*  Turn Taking => TRP */}
      <ArrowDown x={1380} y={752}>
        monitors the current
        <br />
        <b>Turn</b> for <b>TRP</b>s
      </ArrowDown>

      {/*  Action Formation <= Turn Design */}
      <ArrowLeft x={492} y={230}>
        determines the
        <br />
        <b>Action Formation</b>
      </ArrowLeft>

      {/*  Action Formation => Action */}
      <ArrowDown x={177} y={330} length={504}>
        aims to recognizably
        <br />
        produce the
        <br />
        intended Action
      </ArrowDown>

      {/* Turn Design <= Projection */}
      <ArrowLeft x={1076} y={230}>
        enables
        <br />
        early start of
        <br />
        <b>Turn Design</b>
      </ArrowLeft>

      {/*  Projection => Turn-Taking */}
      <ArrowDown x={1380} y={368} length={168}>
        informs the
        <br />
        <b>Turn-Taking</b>
      </ArrowDown>

      {/*  Turn Design => Turn */}
      <ArrowDown x={800} y={460}>
        happens before
        <br />
        and during the <b>Turn</b>
      </ArrowDown>

      {/*  Turn => TCU */}
      <ArrowDown x={800} y={696} length={140}>
        is comprised of
        <br />
        one or more <b>TCU</b>s
      </ArrowDown>

      {/* TCU => TRP */}
      <ArrowRight x={1076} y={895}>
        can mark a<br />
        potential <b>TRP</b>
      </ArrowRight>

      {/* Action <= TCU  */}
      <ArrowLeft x={492} y={895}>
        constitutes one
        <br />
        or more <b>Action</b>s
      </ArrowLeft>

      {/* TCU => Action Ascription */}
      <AngledArrowRight x={818} y={990} vLength={72} hLength={336}>
        recipients continuously attempt to
        <br />
        ascribe <b>Action</b>s to the TCUs in production
      </AngledArrowRight>

      {/* Action Ascription => Placeholders for Projection & Turn-Taking */}
      <div style={{ position: "absolute", left: 1280, top: 1148}}>
        <AngledArrowRight x={0} y={0} vLength={48} hLength={86}>
          informs
        </AngledArrowRight>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "absolute", left: 140, top: 23 }}>
          <div className="text-base font-extrabold text-[#20402f]" style={{ borderRadius: '8px', background: '#74B291', width: '198px', height: '32px', textAlign: 'center', paddingTop: '4px' }}>
            Projection
          </div>
          <div className="text-base font-extrabold text-[#2e3a66]" style={{ borderRadius: '8px', background: '#94A6E5', width: '198px', height: '32px', textAlign: 'center', paddingTop: '4px' }}>
            Turn-Taking
          </div>
        </div>
      </div>

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
        y={584}
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
        y={584}
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
        y={880}
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
        y={880}
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
        y={880}
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
