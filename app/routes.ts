import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("core-concepts-of-conversation-analysis", "routes/visual-ca-concepts.tsx"),
] satisfies RouteConfig;
  