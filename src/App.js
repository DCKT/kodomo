// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'
import glamorous from 'glamorous-native'

/**
 * Components
 */
import { AlphabetModal } from '@root/views/Alphabet'

const AppContainer = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFC107'
})

export default class App extends Component<{}> {
  render () {
    return (
      <AppContainer>
        <AlphabetModal />
      </AppContainer>
    )
  }
}
