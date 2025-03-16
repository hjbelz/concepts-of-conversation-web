export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="text-2xl font-black text-gray-600">
        Welcome to Concepts of Conversation
      </h1>

      <p className="pt-8">
        This site is a collection of concepts and phenomena from the field of
        conversation analysis.
      </p>

      <p className="pb-2">
        See an overview of the{" "}
        <a
          href="/core-concepts-of-conversation-analysis"
          className="text-blue-600"
        >
          concepts of conversation analysis
        </a>
        .
      </p>

      <p className="text-gray-500 pb-16">
        Discover how these concepts can improve your understanding of
        conversations.
      </p>

      <p className="text-gray-300 text-xl font-bold pb-80">
        Work in progress! More content coming soon.
      </p>

    </main>
  );
}
