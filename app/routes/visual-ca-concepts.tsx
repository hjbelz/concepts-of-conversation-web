import type { Route } from "./+types/visual-ca-concepts";
import { CAConceptsOverviewSequence } from "../ca-concepts/ca-concepts-row-sequence";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Key Concepts of Talk (based on Conversation Analysis)" },
    { name: "description", content: "A visual overview of the main structures of talk-in-interaction (based on conversation analysis)." },
  ];
}

export default function VisualCAConcepts() {
  return <CAConceptsOverviewSequence />;
}
