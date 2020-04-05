import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const StyledImg = styled.img`
  object-fit: cover;
  border-radius: ${prop('borderRadius')};
  border: ${prop('border')};
  width: ${prop('width')};
  height: ${prop('height')};
`

const Image = ({ src, width, height, borderRadius, border, circle, ...props }) => {
  return (
    <StyledImg
      src={src}
      width={width}
      height={circle ? width : height}
      borderRadius={circle ? '50%' : borderRadius}
      border={border}
      {...props}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  circle: PropTypes.bool,
}

Image.defaultProps = {
  src: null,
  width: undefined,
  height: undefined,
  borderRadius: '0',
  border: null,
  circle: false,
}

export default Image
