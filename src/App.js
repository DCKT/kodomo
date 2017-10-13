// @flow

import React, { Component } from 'react'
import glamorous from 'glamorous-native'

/**
 * Components
 */
import { LetterButton } from './components/LetterButton'
import { Modal } from './components/Modal'

/**
 * Utils
 */
import { LETTERS } from './utils/letters'

const AppContainer = glamorous.view({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  backgroundColor: '#FFC107'
})

export default class App extends Component<{}> {
  state = {
    isVisible: false,
    currentLetter: ''
  }

  render () {
    const { isVisible, currentLetter } = this.state

    return (
      <AppContainer>
        {LETTERS.map((letter, i) => <LetterButton key={i} letter={letter} onPress={this._onLetterSelection(letter)} />)}

        <Modal isVisible={isVisible} onRequestClose={this._closeModal} currentLetter={currentLetter} />
      </AppContainer>
    )
  }

  _onLetterSelection = letter => () => {
    this.setState(prevState => ({
      ...prevState,
      currentLetter: letter,
      isVisible: true
    }))
  }

  _closeModal = () => this.setState(state => ({ ...state, isVisible: false }))
}
