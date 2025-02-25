import ConceptNode, {
  Phenomenon,
} from "~/components/concepts/ConceptNode";

export function CAConceptsOverview() {
  return (
    <main className="pr-4 pl-4">
      <h1 className="pt-8 pb-2 text-2xl font-black text-gray-600">
        Key Patterns And Structures of Human Talk
      </h1>
      <p className="pb-8">
        The bird's eye view on Conversation Analysis (CA): An overview of the
        conceptualization of talk-in-interaction
      </p>

      <div className="flex h-[1044px] w-[1888px] flex-row gap-2">
        <div className="flex w-[232px] flex-col items-center justify-center bg-[#F0F6FF]">
          <div className="text-2xl font-bold text-sky-600">Conversation</div>
          <div className="text-center">between two or more participants</div>
        </div>

        <div className="relative h-[1044px] w-[1648px] bg-gray-100">
          <ConceptNode
            title="Activity"
            subtitle="Some coordinated undertaking providing coherence to an interaction"
            phenomenon={Phenomenon.Observable}
            isKeyConcept={false}
            emcaUrl="https://emcawiki.net/Activity"
            x={624}
            y={52}
          >
            Participants in a conversation are often engaged in a (social)
            activity, potentially aimed at achieving a specific outcome or goal.
            In this context, 'activity' can refer to anything from playing a
            board game or eating breakfast to making an emergency call or
            standing in court. Depending on the nature of the activity, some or
            all of it may be accomplished solely through talk.
          </ConceptNode>

          <ConceptNode
            title="Conversational Project"
            subtitle="Some covert goal or course of action"
            phenomenon={Phenomenon.Cognitive}
            isKeyConcept={true}
            icon="Project"
            emcaUrl="https://emcawiki.net/Conversational_project"
            x={40}
            y={364}
          >
            Besides easily recognizable „activities“ (see concept), there are less overt conversational „projects“ or courses of action that one or more participants may be pursuing. Some of these pursuits never fully surface. If in the preamble leading up to them, it already becomes clear, that they will be rejected, they may be silently abandoned. Typical examples are extending an invitation or asking for a favor. Some other projects may be tried repeatedly and successfully blocked or evaded by the other party, for example provoking certain statements in a news interview. Participants are generally attentive to such covert pursuits and will orient to them once they become apparent.
          </ConceptNode>

          <ConceptNode
            title="Talk-in-Interaction"
            subtitle="Naturally occuring talk between two or more participants"
            phenomenon={Phenomenon.Observable}
            isKeyConcept={true}
            icon="Conversation"
            emcaUrl="https://emcawiki.net/Talk-in-interaction"
            x={624}
            y={364}
          >
            Natural human conversation unfolds in real time, turn by turn, as a collaborative effort by the participants. Split-second phenomena can significantly influence the progression of the conversation. These moment-to-moment dynamics are highly contextual and mostly oblique to the participants.
          </ConceptNode>

          <ConceptNode
            title="Overall structural organization"
            subtitle="Macro structures of a single occasion of talk"
            phenomenon={Phenomenon.Observable}
            isKeyConcept={false}
            emcaUrl="https://emcawiki.net/Overall_structural_organization"
            x={1208}
            y={364}
          >
            Examining the 'overall structural organization' of a conversation usually involves examining interactional units that extend beyond a single coherent sequence of utterances. Typical examples include the opening and closing parts of a conversation, as well as the conversation as a whole. This 'supra-sequential' perspective provides insights into how these larger segments structure and inform the progression of the conversation. For instance, an opening typically begins with a greeting sequence and ends with a transition to the first topic. Another focus point of this macro view are coherences of smaller elements that are not “local” to their respective sequences. 'How are you?', for example, does different things depending on whether it is part of the opening or the main part of a conversation. 
          </ConceptNode>

          <ConceptNode
            title="Institutional Talk"
            subtitle="Talk shaped by particular conventions and expectations"
            phenomenon={Phenomenon.Observable}
            isKeyConcept={true}
            icon="Institutional"
            emcaUrl="https://emcawiki.net/Institutional_talk"
            x={624}
            y={658}
          >
            Some interactions occur in an “institutional” context, where they are more rigidly shaped than ordinary or „casual“ conversations. An extreme example is a court hearing, where deviations from the established rules of interaction can be formally punishable. Other examples include news interviews, medical visitations and customer service calls. These situations share the characteristic features of „institutional talk“:  Participants orient towards a specific task, goal or function associated with the institution. In addition, there are specific constraints on what contributions are acceptable, shaped by the participants’ roles (e.g. patient and doctor). Also, the conduct and contributions of the participants may be interpreted differently compared to ordinary talk (e.g. adversarial questions in a news interview).
          </ConceptNode>
        </div>
      </div>
    </main>
  );
}
