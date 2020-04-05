import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { Box, Flex } from '@rebass/grid'
import socketIOClient from 'socket.io-client'
import Text from './components/atoms/Text'
import Image from './components/atoms/Image'
import Chatroom from './components/Organisms/Chatroom'
import config from './config'
import './App.css'

const AppContainer = styled(Flex)`
  background: ${palette('grayscale', 4)};
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 4.5rem 1rem 3rem;
  @media only screen and (max-width: ${size('mobile')}) {
    padding: 3.5rem 0 0;
  }
`

const Header = styled.header`
  background: ${palette('primary', 0)};
  padding: 0.5rem 1rem;
  position: fixed;
  height: 30vh;
  top: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: ${size('mobile')}) {
    padding: 0.5rem;
  }
`

const DesktopImage = styled(Image)`
  @media only screen and (max-width: ${size('mobile')}) {
    display: none;
  }
`

const MobileImage = styled(Image)`
  display: none;
  @media only screen and (max-width: ${size('mobile')}) {
    display: initial;
  }
`

const ContentBox = styled(Box)`
  background: ${palette('grayscale', 5)};
  box-shadow: 0 1.0625rem 3.125rem 0 ${palette('grayscale', 2)}, 0 0.75rem 0.9375rem 0 ${palette('grayscale', 2)};
  max-width: ${size('maxWidth')};
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  padding: 0.5rem;
  z-index: 1;
`

const App = () => {
  const [webSocket, setWebSocket] = useState(null)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (!webSocket) {
      const { apiUrl } = config
      const socket = socketIOClient(apiUrl)
      setWebSocket(socket)
    } else if (!webSocket.hasListeners('receiveMessage')) {
      webSocket.on('receiveMessage', (message) => {
        setMessages((originalMessages) => {
          // must use this callback to get the original messages
          // instead of getting the state.messages directly
          // because state.messages are not updated within useEffect hook
          const newMessages = originalMessages.concat(message)
          return newMessages
        })
      })
    }
  }, [webSocket])

  return (
    <AppContainer>
      <Header>
        <Flex alignItems="center">
          <DesktopImage src="logo_white.png" width="3.75rem" height="3.75rem" alt="Chitchat" />
          <MobileImage src="logo_simple_white.png" width="2.75rem" height="2.75rem" alt="Chitchat" />
          <Box ml={['0.25rem', '0.5rem']}>
            <Text variant="h1" palette="grayscale" paletteIndex={6} bold>Chitchat</Text>
          </Box>
        </Flex>
      </Header>
      <ContentBox>
        <Chatroom
          userId={webSocket ? webSocket.id : null}
          messages={messages}
          onMessageSend={(message) => {
            webSocket.emit('sendMessage', message)
          }}
          onUserNameSave={(userName) => {
            webSocket.emit('updateUserName', userName)
          }}
        />
      </ContentBox>
    </AppContainer>
  )
}

export default App
