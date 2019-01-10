import React from 'react'
import { Query, } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import styled from 'styled-components'

import withData from '../utils/apollo/withData'
import Page from '../components/Page'

// TODO move function to utils file
const slugify = (text) => {
  const slug = text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
  return slug
}

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY {
    dishes {
      name
      id
      image {
        url
      }
    }
  }
`

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Item = styled.div`
  max-width: 33%;
  flex-grow: 1;
  & img {
    width: 100%;
  }
`

const dishes = () => (
  <Page>
    <Query query={ALL_RECIPES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading</p>
        }
        if (error) {
          return <p>Error</p>
        }
        return <ItemsWrapper>
          {data.dishes.map((item) =>
            <Item>
              <Link
                href={{ pathname: '/dish', query: { id: item.id }}}
                // route="dish"
                // params={{
                //   slug: slugify("test Slug")
                // }}
              >
                <a style={{ display: 'block' }}>
                  {item.name}
                  <img src={item.image.url} />
                </a>
              </Link>
            </Item>
          )}
        </ItemsWrapper>
      }}
    </Query>
  </Page>
)

export default withData(dishes)