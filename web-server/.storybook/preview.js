import React from 'react'
import StoryRouter from 'storybook-router'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withConsole } from '@storybook/addon-console'
import { ThemeProvider } from 'styled-components'
import appTheme from '../src/theme'

addDecorator(withInfo)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(StoryRouter())
addDecorator(story => 
  <ThemeProvider theme={appTheme}>
    <div style={{ paddingTop: 20 }}>
      {story()}
    </div>
  </ThemeProvider>
)
