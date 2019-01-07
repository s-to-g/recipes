/* Taken from https://github.com/zeit/next.js/tree/canary/examples/with-apollo */
import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import initApollo from './initApollo';

const isBrowser = typeof window !== 'undefined';

const withApollo = (App: any) => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)';

    static async getInitialProps(ctx: any) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (!isBrowser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
          );
        } catch (error) {
          /* eslint-disable-next-line no-console */
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    apolloClient: ApolloClient<NormalizedCacheObject>;

    constructor(props: any) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};

export default withApollo;