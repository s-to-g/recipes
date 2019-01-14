import styled from 'styled-components'
import theme from '../../config/theme'

const HeaderWrapper = styled.div`
  background-color: ${theme.colors.orange};
  color: ${theme.colors.white};
`

const HeaderInner = styled.div`
  max-width: ${theme.maxSiteWidth}px;
  margin: 0 auto;
  padding: ${theme.spacings.m}px 0;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <p>YUMMY</p>
    </HeaderInner>
  </HeaderWrapper>
)

export default Header