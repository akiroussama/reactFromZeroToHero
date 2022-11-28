import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { worker } from "./mocks";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: "bypass",
});
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
