import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { Box, Flex } from '@rebass/grid'
import socketIOClient from 'socket.io-client'
import Text from './components/atoms/Text'
import Chatroom from './components/Organisms/Chatroom'
import config from './config'
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
  padding: 0.5rem 1rem;
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
        <Text variant="h1" bold>Chitchat</Text>
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
