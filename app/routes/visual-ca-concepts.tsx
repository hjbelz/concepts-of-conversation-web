import type { Route } from "./+types/visual-ca-concepts";
import CAConceptsOverview from "~/ca-concepts/ca-concepts-overview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Key Concepts of Talk (based on Conversation Analysis)" },
    { name: "description", content: "A visual overview of the main structures of talk-in-interaction (based on conversation analysis)." },
  ];
}

export default function VisualCAConcepts() {
  return <CAConceptsOverview />;
}
