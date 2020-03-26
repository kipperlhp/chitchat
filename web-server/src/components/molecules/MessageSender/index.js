import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import Text from '../../atoms/Text'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

const MessageSender = ({ onSend, ...props }) => {
  const [message, setMessage] = useState('')
  return (
    <Flex {...props}>
      <Input
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={(e) => {
          if (message && e.keyCode === 13) {
            setMessage('')
            return onSend(message)
          }
          return false
        }}
      />
      <Flex ml="0.25rem">
        <Button
          onClick={() => {
            setMessage('')
            return onSend(message)
          }}
          disabled={!message}
        >
          <Text variant="body2">Send</Text>
        </Button>
      </Flex>
    </Flex>
  )
}

MessageSender.propTypes = {
  onSend: PropTypes.func,
}

MessageSender.defaultProps = {
  onSend: () => {},
}

export default MessageSender
