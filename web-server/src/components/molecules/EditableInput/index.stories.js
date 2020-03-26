import React from 'react'
import { storiesOf } from '@storybook/react'
import EditableInput from '.'

storiesOf('Molecules|EditableInput', module)
  .add('default', () => (
    <EditableInput
      label="Label"
      onSave={(value) => console.log('value', value)}
    />
  ))
