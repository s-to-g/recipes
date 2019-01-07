import App, { Container, NextAppContext } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, NormalizedCacheObject} from 'apollo-boost'
import withData from '../utils/apollo/withData'

type Props = {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

class MyApp extends App<Props> {
  static async getInitialProps({Component, ctx}: NextAppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return {pageProps}
  }
  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}
    
export default withData(MyApp)