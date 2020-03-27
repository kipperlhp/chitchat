import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Flex, Box } from '@rebass/grid'
import Text from '../../atoms/Text'
import Message from '../../molecules/Message'
import EditableInput from '../../molecules/EditableInput'
import MessageSender from '../../molecules/MessageSender'

const ChatHistoryContainer = styled(Flex)`
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
`

const MessageWrapper = styled(Flex)`
  overflow-anchor: none;
  margin-bottom: 0.25rem;
  justify-content: center;
`

const AnchorDiv = styled.div`
  min-height: 1px;
  overflow-anchor: auto;
`

const SystemMessage = styled(Flex)`
  background: ${palette('primary', 3)};
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.0625rem 0.125rem ${palette('grayscale', 2)};
`

const Chatroom = ({ messages, userId, onMessageSend, onUserNameSave }) => {
  return (
    <Flex flexDirection="column" style={{ height: '100%' }}>
      <Flex justifyContent="flex-end" mb="0.5rem">
        <EditableInput
          label="Display Name"
          onSave={onUserNameSave}
          width={[1, 1 / 2]}
        />
      </Flex>
      <ChatHistoryContainer>
        {messages.map((message, i) => {
          const isMyMessage = (message.sender.id === userId)
          const isSystemMessage = (message.sender.id === 0)
          return (
            <MessageWrapper key={`message-${i}`}>
              {isSystemMessage ? (
                <SystemMessage>
                  <Text align="center">{message.content}</Text>
                </SystemMessage>
              ) : (
                <>
                  {isMyMessage && <Box flex="1 1 0" />}
                    <Message
                      message={message}
                      align={isMyMessage ? 'right' : 'left'}
                    />
                  {isMyMessage || <Box flex="1 1 0" />}
                </>
              )}
            </MessageWrapper>
          )
        })}
        <AnchorDiv />
      </ChatHistoryContainer>
      <Box mt="0.5rem">
        <MessageSender onSend={onMessageSend} />
      </Box>
    </Flex>
  )
}

Chatroom.propTypes = {
  messages: PropTypes.array,
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMessageSend: PropTypes.func,
  onUserNameSave: PropTypes.func,
}

Chatroom.defaultProps = {
  messages: [],
  userId: null,
  onMessageSend: () => {},
  onUserNameSave: () => {},
}

export default Chatroom
