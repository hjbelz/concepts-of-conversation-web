import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Noto+Serif:ital@0;1&display=swap",
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />

        <footer className="pr-4 pl-4 pt-8 pb-4 text-gray-600 text-sm">
          <p {...{ "xmlns:cc": "http://creativecommons.org/ns#", "xmlns:dct": "http://purl.org/dc/terms/" }}>
            <a property="dct:title" rel="cc:attributionURL" href="http://concepts-of-conversation.org/">Concepts of Conversation</a> by <a className="text-sky-600" rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/hansjoachimbelz/">Hans-Joachim Belz</a> is licensed under&nbsp;
            <a className="text-sky-600" href="https://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{ display: "inline-block" }}>CC BY-ND 4.0
            <img style={{ height: "22px", marginLeft: "8px", verticalAlign: "text-bottom", display: "inline" }} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="" />
            <img style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom", display: "inline" }} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="" />
            <img style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom", display: "inline" }} src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt="" />
            </a></p>
        </footer>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
