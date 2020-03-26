import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import Text from '../../atoms/Text'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

const EditableInput = ({ label, onSave, ...props }) => {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState('')
  return (
    <Flex {...props}>
      <Flex alignItems="center" flexShrink={0} mr="0.5rem">
        <Text>{label}</Text>
      </Flex>
      <Input
        readOnly={!editing}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Flex ml="0.25rem">
        <Button
          onClick={() => {
            if (editing) {
              setEditing(!editing)
              return onSave(value)
            }
            return setEditing(!editing)
          }}
        >
          <Text variant="body2">
            {editing ? 'Save' : 'Edit'}
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}

EditableInput.propTypes = {
  label: PropTypes.string,
  onSave: PropTypes.func,
}

EditableInput.defaultProps = {
  label: '',
  onSave: () => {},
}

export default EditableInput
