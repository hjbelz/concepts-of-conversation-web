import ConceptNode, {
  Icons,
  Phenomenon,
} from "~/components/concepts/ConceptNode";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex">
        <h1 className="text-2xl font-bold">
          Welcome to Concepts of Conversation
        </h1>
      </div>

      <div className="flex">
        <p className="mt-2">
          See an overview of the{" "}
          <a href="/core-concepts-of-conversation-analysis" className="text-blue-500 underline">
            concepts of conversation analysis
          </a>
        </p>
      </div>

      <div className="mt-4 flex">
        <p className="text-gray-600">
          Discover how these concepts can improve your understanding of
          conversations.
        </p>
      </div>
    </main>
  );
}
