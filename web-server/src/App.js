import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { Box, Flex } from '@rebass/grid'
import './App.css'

const AppContainer = styled(Flex)`
  background: ${palette('grayscale', 4)};
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
`

const Header = styled.header`
  background: ${palette('primary', 0)};
  position: fixed;
  height: 30vh;
  top: 0;
  left: 0;
  right: 0;
`

const ContentBox = styled(Box)`
  background: ${palette('grayscale', 5)};
  box-shadow: 0 17px 50px 0 ${palette('grayscale', 2)}, 0 12px 15px 0 ${palette('grayscale', 2)};
  max-width: ${size('maxWidth')};
  width: 100%;
  height: 85%;
  border-radius: 0.25rem;
  padding: 0.5rem;
  z-index: 1;
`

const App = () => {
  return (
    <AppContainer>
      <Header>
        <h2>Chitchat</h2>
      </Header>
      <ContentBox>
        Coming Soon...
      </ContentBox>
    </AppContainer>
  )
}

export default App
