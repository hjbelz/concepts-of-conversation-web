import { CAConceptsOverviewColConversation } from "./ca-concepts-col-conversation";
import { CAConceptsOverviewColSequence } from "./ca-concepts-col-sequence";
import { CAConceptsOverviewColSeqTurn } from "./ca-concepts-col-seq-turn";
import { CAConceptsOverviewColTurn } from "./ca-concepts-col-turn";
import {
  CAConceptsOverviewRow,
  CAConceptsOverviewTitleColumn,
  CAConceptsOverviewRowSeparator,
} from "./ca-concepts-row";

// Icons of the title columns (level of granularity)
import ConversationIcon from "./LOD Icon Conversation.png";
import SequenceIcon from "./LOD Icon Sequence.png";
import TurnIcon from "./LOD Icon Turn.png";
import SeqTurnIcon from "./LOD Icon Sequence & Turn.png";

// TEST
import ActionIcon from "~/components/concepts/icons/Action.svg";

export default function CAConceptsOverview() {
  return (
    <main className="pr-4 pl-4">
      <h1 className="pt-8 pb-4 text-2xl font-black text-gray-600">
        The Basic Structures and Patterns of Human Talk
        <br />
        <small className="font-semibold text-gray-600">
          How conversation analysis conceptualizes human interaction.
        </small>
      </h1>
      <div className="max-w-1/2">
        <p className="pb-2">
          This work in progress is an attempt to visualize the key concepts of ethnomethodological conversation analysis and how those concepts model naturally occurring human talk. The structuring and segmentation aim to facilitate a basic understanding of the granularity of the concepts (the macro and micro structures of talk) and how they relate to each other. The brief characterizations accompanying each node of the map serve to provide an initial understanding or a quick refresher.
        </p>
        <p className="pb-8">
          <b>Tip:</b> For a more detailed discussion click on the title of each concept box to navigate to the respective article in the <a className="text-sky-600" href="https://emcawiki.net/Encyclopedia_of_Terminology_for_CA_and_IL">EMCA&nbsp;Wiki</a>. Please be aware that currently not all concepts are covered by articles in the Wiki.
        </p>
      </div>

      <CAConceptsOverviewRow rowHeight={640}>
        <div className="flex h-[64px] w-[232px] flex-col items-center justify-center bg-[#C3DCFF] text-[20px] font-black text-[#435977]">
          Granularity
        </div>
        <div className="flex h-[64px] w-[1648px] flex-col items-center justify-center bg-[#C3DCFF] text-[20px] font-black text-[#435977]">
          Structures and Patterns
        </div>
      </CAConceptsOverviewRow>

      <CAConceptsOverviewRow rowHeight={1044}>
        <CAConceptsOverviewTitleColumn
          superText="A complete"
          title="Conversation"
          subText="between two or more participants"
          image={ConversationIcon}
          imageAltText="Conversation"
        />
        <CAConceptsOverviewColConversation />
      </CAConceptsOverviewRow>

      <CAConceptsOverviewRowSeparator />

      <CAConceptsOverviewRow rowHeight={657}>
        <CAConceptsOverviewTitleColumn
          superText="A single"
          title="Sequence"
          subText="(a coherent string of utterances)"
          image={SequenceIcon}
          imageAltText="Conversation"
        />
        <CAConceptsOverviewColSequence />
      </CAConceptsOverviewRow>

      <CAConceptsOverviewRowSeparator />

      <CAConceptsOverviewRow rowHeight={524}>
        <CAConceptsOverviewTitleColumn
          superText="Affecting both,"
          title="Sequence & Turn"
          image={SeqTurnIcon}
          imageAltText="Affecting both - sequence and turn"
        />
        <CAConceptsOverviewColSeqTurn />
      </CAConceptsOverviewRow>

      <CAConceptsOverviewRowSeparator />

      <CAConceptsOverviewRow rowHeight={1301}>
        <CAConceptsOverviewTitleColumn
          superText="A single"
          title="Turn"
          image={TurnIcon}
          imageAltText="A single turn at talk"
        />
        <CAConceptsOverviewColTurn />
      </CAConceptsOverviewRow>
    </main>
  );
}
