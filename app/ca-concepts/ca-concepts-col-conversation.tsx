import ArrowDown from '~/components/concepts/arrows/ArrowDown';
import ArrowLeft from '~/components/concepts/arrows/ArrowLeft';
import ArrowRight from '~/components/concepts/arrows/ArrowRight';
import SpecializationDown from '~/components/concepts/arrows/SpecializationDown';
import ConceptNode, { Phenomenon } from "~/components/concepts/ConceptNode";

export function CAConceptsOverviewColConversation() {
  return (
    <div className="relative h-[1044px] w-[1648px] bg-gray-100">

      {/*  Activity => Talk-in-Interaction */}
      <ArrowDown x={800} y={255}>
        frames or<br />
        shapes the <b>Talk</b>
      </ArrowDown>

      {/* Conversational Project => Talk-in-Interaction */}
      <ArrowRight x={492} y={372}>
        influnces the<br />
        course of the<br />
        <b>Talk</b>
      </ArrowRight>

      {/* Talk-in-Interaction <= Overall Structural Organization */}
      <ArrowLeft x={1076} y={372}>
        structures and<br />
        informs the<br />
        <b>Talk</b>
      </ArrowLeft>

      {/*  Talk-in-Interaction => Institutional Talk */}
      <SpecializationDown x={800} y={548} length={76}>
        A special class of <b>Talk</b>:<br />
        Interactions in constrained<br />
        <b>"institutional"</b> contexts
      </SpecializationDown>

      <ConceptNode
        title="Activity"
        subtitle="Some coordinated undertaking providing coherence to an interaction"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Activity"
        colIndex={2}
        y={52}
      >
        Participants in a conversation are often engaged in a (social)
        activity, potentially aimed at achieving a specific outcome or goal.
        In this context, 'activity' can refer to anything from playing a board
        game or eating breakfast to making an emergency call or standing in
        court. Depending on the nature of the activity, some or all of it may
        be accomplished solely through talk.
      </ConceptNode>

      <ConceptNode
        title="Conversational Project"
        subtitle="Some covert goal or course of action"
        phenomenon={Phenomenon.Cognitive}
        isKeyConcept={true}
        icon="Project"
        emcaUrl="https://emcawiki.net/Conversational_project"
        colIndex={1}
        y={364}
      >
        Besides easily recognizable „activities“ (see concept), there are less
        overt conversational „projects“ or courses of action that one or more
        participants may be pursuing. Some of these pursuits never fully
        surface. If in the preamble leading up to them, it already becomes
        clear, that they will be rejected, they may be silently abandoned.
        Typical examples are extending an invitation or asking for a favor.
        Some other projects may be tried repeatedly and successfully blocked
        or evaded by the other party, for example provoking certain statements
        in a news interview. Participants are generally attentive to such
        covert pursuits and will orient to them once they become apparent.
      </ConceptNode>

      <ConceptNode
        title="Talk-in-Interaction"
        subtitle="Naturally occuring talk between two or more participants"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={true}
        icon="Conversation"
        emcaUrl="https://emcawiki.net/Talk-in-interaction"
        colIndex={2}
        y={364}
      >
        Natural human conversation unfolds in real time, turn by turn, as a
        collaborative effort by the participants. Split-second phenomena can
        significantly influence the progression of the conversation. These
        moment-to-moment dynamics are highly contextual and mostly oblique to
        the participants.
      </ConceptNode>

      <ConceptNode
        title="Overall Structural Organization"
        subtitle="Macro structures of a single occasion of talk"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={false}
        emcaUrl="https://emcawiki.net/Overall_structural_organization"
        colIndex={3}
        y={364}
      >
        Examining the 'overall structural organization' of a conversation
        usually involves examining interactional units that extend beyond a
        single coherent sequence of utterances. Typical examples include the
        opening and closing parts of a conversation, as well as the
        conversation as a whole. This 'supra-sequential' perspective provides
        insights into how these larger segments structure and inform the
        progression of the conversation. For instance, an opening typically
        begins with a greeting sequence and ends with a transition to the
        first topic. Another focus point of this macro view are coherences of
        smaller elements that are not “local” to their respective sequences.
        'How are you?', for example, does different things depending on
        whether it is part of the opening or the main part of a conversation.
      </ConceptNode>

      <ConceptNode
        title="Institutional Talk"
        subtitle="Talk shaped by particular conventions and expectations"
        phenomenon={Phenomenon.Observable}
        isKeyConcept={true}
        icon="Institutional"
        emcaUrl="https://emcawiki.net/Institutional_talk"
        colIndex={2}
        y={658}
      >
        Some interactions occur in an “institutional” context, where they are
        more rigidly shaped than ordinary or „casual“ conversations. An
        extreme example is a court hearing, where deviations from the
        established rules of interaction can be formally punishable. Other
        examples include news interviews, medical visitations and customer
        service calls. These situations share the characteristic features of
        „institutional talk“: Participants orient towards a specific task,
        goal or function associated with the institution. In addition, there
        are specific constraints on what contributions are acceptable, shaped
        by the participants’ roles (e.g. patient and doctor). Also, the
        conduct and contributions of the participants may be interpreted
        differently compared to ordinary talk (e.g. adversarial questions in a
        news interview).
      </ConceptNode>
    </div>
  );
}
