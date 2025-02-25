export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="text-2xl font-black text-gray-600">
        Welcome to Concepts of Conversation
      </h1>

      <p className="pt-8">
        See an overview of the{" "}
        <a
          href="/core-concepts-of-conversation-analysis"
          className="text-blue-500"
        >
          concepts of conversation analysis
        </a>
        .
      </p>

      <p className="text-gray-500">
        Discover how these concepts can improve your understanding of
        conversations.
      </p>
    </main>
  );
}
