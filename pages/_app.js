import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient} from 'apollo-boost'
import withApollo from '../utils/apollo/withApollo'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component { ...pageProps } />
        </ApolloProvider>
      </Container>
    )
  }
}
    
export default withApollo(MyApp)