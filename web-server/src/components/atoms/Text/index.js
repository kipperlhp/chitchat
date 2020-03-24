/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { font } from 'styled-theme'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { switchProp, ifProp, prop } from 'styled-tools'
import theme from '../../../theme'

const TextWrap = ({ palette, paletteIndex, variant, bold, align, ...props }) => {
  switch (variant) {
    case 'h1':
      return <h1 {...props} />
    case 'h2':
      return <h2 {...props} />
    case 'h3':
      return <h3 {...props} />
    default:
      return <div {...props} />
  }
}

TextWrap.propTypes = {
  palette: PropTypes.string,
  paletteIndex: PropTypes.number,
  variant: PropTypes.string,
  bold: PropTypes.bool,
  align: PropTypes.string,
}

const StyledWrap = styled(TextWrap)`
  display: inline-block;
  font-family: ${font('primary')};
  color: ${({ palette, paletteIndex }) => theme.palette[palette][paletteIndex]};
  font-size: ${switchProp('variant', {
    h1: '2.25rem',
    h2: '1.62671rem',
    h3: '1.38316rem',
    body1: '1rem',
    body2: '0.85028rem',
    body3: '0.78405rem',
  })};
  line-height: 1.2;
  text-align: ${prop('align')};
  font-weight: ${ifProp('bold', 'bold', 'normal')};
  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;
`

const Text = ({ children, ...props }) => {
  return (
    <StyledWrap
      {...props}
    >
      {children}
    </StyledWrap>
  )
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  palette: PropTypes.string,
  paletteIndex: PropTypes.number,
  variant: PropTypes.string,
  bold: PropTypes.bool,
  align: PropTypes.string,
}

Text.defaultProps = {
  children: null,
  palette: 'grayscale',
  paletteIndex: 0,
  variant: 'body1',
  bold: false,
}

export default Text
