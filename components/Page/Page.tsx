import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../../config/theme'
import Header from '../Header'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, caption {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
  }
  html {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    box-sizing: border-box;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
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