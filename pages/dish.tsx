import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../utils/apollo/withData'
import Page from '../components/Page'
import Heading from '../components/Heading'

interface Props {
  product: any,
}

const GET_DISH = (id: String) => gql`
    query GET_DISH {
      dish(where: {id: "${id}"}) {
        name
      }
    }
  `

class Dish extends React.Component<Props> {
  render() {
    const {id} = this.props.query
    return <Page>
        <Query query={GET_DISH(id)}>
          {({data, error, loading}) => {
            console.log({loading}, {error}, {data})
            if (loading) {
              return <p>Loading</p>
            }
            if (error) {
              return <p>Error</p>
            }
          return (
            <React.Fragment>
              <Heading size="l">{data.dish.name}</Heading>
            </React.Fragment>
          )
          }}
        </Query>
      </Page>
  }
}

export default withData(Dish)