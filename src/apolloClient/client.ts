import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "https://api.graphql.jobs/",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
