import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { palette } from 'styled-theme'

const StyledButton = styled.button`
  cursor: ${ifProp('disabled', 'auto', 'pointer')};
  outline: 0;
  padding: 0.5rem 1rem;
  background: ${ifProp('disabled', palette('grayscale', 4), palette('primary', 1))};
  border: 0.125rem solid ${ifProp('disabled', palette('grayscale', 4), palette('primary', 0))};
  border-radius: 0.25rem;
  transition: ease 0.3s;
  :hover {
    background: ${ifProp('disabled', palette('grayscale', 4), palette('primary', 0))};
  }
  :active {
    background: ${ifProp('disabled', palette('grayscale', 4), palette('primary', 2))};
  }
  ${ifProp('fullWidth', css`
    display: block;
    width: 100%;
  `)}
`

const Button = ({ onClick, disabled, fullWidth, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    />
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  fullWidth: false,
}

export default Button
