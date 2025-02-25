import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Concepts of Conversation" },
    { name: "description", content: "Deep dive into the mechanisms of human conversation." },
  ];
}

export default function Home() {
  return <Welcome />;
}
