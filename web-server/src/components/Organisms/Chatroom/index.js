import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
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
`

const AnchorDiv = styled.div`
  min-height: 1px;
  overflow-anchor: auto;
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
          return (
            <MessageWrapper key={`message-${i}`}>
              {isMyMessage && <Box flex="1 1 0" />}
              <Message
                message={message}
                align={isMyMessage ? 'right' : 'left'}
              />
              {isMyMessage || <Box flex="1 1 0" />}
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
