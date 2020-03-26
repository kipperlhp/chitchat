import React from 'react'
import { storiesOf } from '@storybook/react'
import Chatroom from '.'

const testMessages = [
  {
    sender: { id: 1, name: 'Mike Chan' },
    content: 'Anyone here?',
    createdAt: '2020-03-24T18:50:23.261Z',
  },
  {
    sender: { id: 2, name: 'Pan Wong' },
    content: 'Hi?',
    createdAt: '2020-03-24T18:50:23.261Z',
  },
  {
    sender: { id: 1, name: 'Mike Chan' },
    content: 'How are you Pan...',
    createdAt: '2020-03-24T18:50:23.261Z',
  },
  {
    sender: { id: 2, name: 'Pan Wong' },
    content: 'I am fine, Thank you',
    createdAt: '2020-03-24T18:50:23.261Z',
  },
  {
    sender: { id: 1, name: 'Mike Chan' },
    content: 'Hi Fine.',
    createdAt: '2020-03-24T18:50:23.261Z',
  },
  {
    sender: { id: 1, name: 'Mike Chan' },
    content: 'I am Hungry',
    createdAt: '2020-03-24T18:50:23.261Z',
  },
  {
    sender: { id: 3, name: 'Gregory' },
    content: 'Nice to meet you Hungry.',
    createdAt: '2020-03-24T18:50:23.261Z',
  },
]

storiesOf('Organisms|Chatroom', module)
  .add('default', () => (
    <div style={{ height: '90vh' }}>
      <Chatroom
        userId={2}
        messages={testMessages}
        onMessageSend={(msg) => console.log('message', msg)}
        onUserNameSave={(name) => console.log('name', name)}
      />
    </div>
  ))
