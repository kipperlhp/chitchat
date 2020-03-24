import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Atoms|Button', module)
  .add('default', () => (
    <Button onClick={() => console.log('hi')}>Click me</Button>
  ))
  .add('full width', () => (
    <Button onClick={() => console.log('hi')} fullWidth>Click me</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Click me</Button>
  ))
