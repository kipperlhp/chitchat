import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import appTheme from '../theme'

const ColorBlock = styled.div`
  height: 3rem;
  width: 3rem;
  display: inline-block;
  background: ${(props) => appTheme.palette[props.palette][props.index]};
`

storiesOf('Palette', module).add('default', () => (
  <div>
    primary
    <br />
    <ColorBlock palette="primary" index={0} />
    <ColorBlock palette="primary" index={1} />
    <ColorBlock palette="primary" index={2} />
    <ColorBlock palette="primary" index={3} />
    <br />
    grayscale
    <br />
    <ColorBlock palette="grayscale" index={0} />
    <ColorBlock palette="grayscale" index={1} />
    <ColorBlock palette="grayscale" index={2} />
    <ColorBlock palette="grayscale" index={3} />
    <ColorBlock palette="grayscale" index={4} />
    <ColorBlock palette="grayscale" index={5} />
    <ColorBlock palette="grayscale" index={6} />
    <br />
    success
    <br />
    <ColorBlock palette="success" index={0} />
    <br />
    error
    <br />
    <ColorBlock palette="error" index={0} />
  </div>
))
