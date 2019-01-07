/* Taken from https://github.com/zeit/next.js/tree/canary/examples/with-apollo */
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  ApolloLink,
  gql,
} from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import fetch from 'isomorphic-unfetch';
import { endpoint } from '../../config'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
const isBrowser = typeof window !== 'undefined';

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

function create(initialState?: any) {
  const cache = new InMemoryCache().restore(initialState || {});

  const httpLink = new HttpLink({
    uri: endpoint,
  });
  const clientLink = withClientState({
    cache,
    defaults: {
      counter: 0,
    },
    resolvers: {
      Mutation: {
        incrementCounter: (_: any, __: any, { cache }: any) => {
          const query = gql`
            query Counter {
              counter @client
            }
          `;
          const previousState = cache.readQuery({ query });
          cache.writeQuery({
            query,
            data: {
              counter: previousState.counter + 1,
            },
          });
          return null;
        },
      },
    },
  });
  return new ApolloClient({
    connectToDevTools: isBrowser,
    // Disables forceFetch on the server (so queries are only run once)
    ssrMode: !isBrowser,
    link: ApolloLink.from([clientLink, httpLink]),
    cache,
  });
}

export default function initApollo(initialState?: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}