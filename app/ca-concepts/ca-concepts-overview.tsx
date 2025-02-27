import { CAConceptsOverviewColConversation } from "./ca-concepts-col-conversation";
import { CAConceptsOverviewColSequence } from "./ca-concepts-col-sequence";
import {
  CAConceptsOverviewRow,
  CAConceptsOverviewTitleColumn,
  CAConceptsOverviewRowSeperator,
} from "./ca-concepts-row";

import ActionIcon from "~/components/concepts/icons/Action.svg";

export default function CAConceptsOverview() {
  return (
    <main className="pr-4 pl-4">
      <h1 className="pt-8 pb-2 text-2xl font-black text-gray-600">
        The Basic Structures and Patterns of Human Talk
        <br />
        <small className="font-semibold text-gray-600">
          How conversation analysis conceptualizes human interaction.
        </small>
      </h1>
      <p className="pb-8">
        This is a bird's eye view on Conversation Analysis (CA): An overview of
        the conceptualization of talk-in-interaction
      </p>

      <CAConceptsOverviewRow rowHeight={1044}>
        <CAConceptsOverviewTitleColumn
          title="Conversation"
          subText="between two or more participants"
          image={ActionIcon}
          imageAltText="Conversation"
        />
        <CAConceptsOverviewColConversation />
      </CAConceptsOverviewRow>

      <CAConceptsOverviewRowSeperator />

      <CAConceptsOverviewRow rowHeight={657}>
        <CAConceptsOverviewTitleColumn
          superText="A single"
          title="Sequence"
          subText="(a coherent string of utterances"
          image={ActionIcon}
          imageAltText="Conversation"
        />
        <CAConceptsOverviewColSequence />
      </CAConceptsOverviewRow>
    </main>
  );
}
