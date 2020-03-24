import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { palette } from 'styled-theme'
import { Box, Flex } from '@rebass/grid'
import Text from '../../atoms/Text'

const StyledBox = styled(Box)`
  background: ${ifProp({ align: 'left' }, palette('primary', 1), palette('primary', 0))};
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: relative;
  ${ifProp({ align: 'left' }, css`
    border-top-left-radius: 0;
    margin-left: 0.75rem;
  `, css`
    border-top-right-radius: 0;
    margin-right: 0.75rem;
  `)}
  ::before {
    content: '';
    position: absolute;
    top: 0;
    border-bottom: 0.75rem solid transparent;
    ${ifProp({ align: 'left' }, css`
      left: 0;
      border-right: 0.5rem solid ${palette('primary', 1)};
      margin-left: -0.5rem;
    `, css`
      right: 0;
      border-left: 0.5rem solid ${palette('primary', 0)};
      margin-right: -0.5rem;
    `)}
  }
`

const Message = ({ message, align, ...props }) => {
  const { sender = {}, content, createdAt } = message
  const { name: senderName } = sender
  return (
    <StyledBox align={align} {...props}>
      <Flex>
        <Text bold variant="body2" palette="grayscale" paletteIndex={1}>{senderName}</Text>
      </Flex>
      <Flex>
        <Text>{content}</Text>
      </Flex>
      <Flex justifyContent="flex-end">
        <Text variant="body3" palette="grayscale" paletteIndex={align === 'left' ? 2 : 1}>
          {createdAt.slice(0, 19)}
        </Text>
      </Flex>
    </StyledBox>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.shape({
      name: PropTypes.string,
    }),
    content: PropTypes.string,
    createdAt: PropTypes.object,
  }),
  align: PropTypes.oneOf(['left', 'right']),
}

Message.defaultProps = {
  message: {},
  align: 'left',
}

export default Message
