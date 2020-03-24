import React from 'react'
import { storiesOf } from '@storybook/react'
import MessageSender from '.'

storiesOf('Molecules|MessageSender', module)
  .add('default', () => (
    <MessageSender onSend={(msg) => console.log('message', msg)} />
  ))
