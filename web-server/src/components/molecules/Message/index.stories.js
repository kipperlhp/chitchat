import React from 'react'
import { storiesOf } from '@storybook/react'
import Message from '.'

const testMsg = {
  sender: {
    name: 'Sam Wong',
  },
  content: 'I go to school by bus',
  createdAt: '2020-03-24T18:50:23.261Z',
}

storiesOf('Molecules|Message', module)
  .add('default', () => (
    <Message message={testMsg} />
  ))
  .add('align right', () => (
    <Message message={testMsg} align="right" />
  ))
