import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'

storiesOf('Atoms|Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('with placeholder', () => (
    <Input placeholder="Enter your Text" />
  ))
  .add('readOnly', () => (
    <Input readOnly placeholder="This is readOnly"/>
  ))
  .add('invalid', () => (
    <Input invalid />
  ))
