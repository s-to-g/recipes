import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../../config/theme'
import Header from '../Header'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.colors.black};
  }
`

const InnerPage = styled.div`
  max-width: ${theme.maxSiteWidth}px;
  margin: 0 auto;
`

const Page = (props: any) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <InnerPage>{props.children}</InnerPage>
  </React.Fragment>
)

export default Page