import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from '.'

storiesOf('Atoms|Image', module)
  .add('default', () => (
    <Image src="logo.png" />
  ))
  .add('custom size', () => (
    <Image
      src="https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"
      width={500}
      height={150}
    />
  ))
  .add('circle', () => (
    <Image
      src="https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"
      width="15rem"
      circle
    />
  ))
  .add('with border', () => (
    <Image
      src="logo.png"
      width="15rem"
      border="0.25rem solid blue"
    />
  ))
  .add('custom border-radius', () => (
    <Image
      src="https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"
      width={250}
      borderRadius="2rem"
    />
  ))
