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
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignItems: 'center',
  backgroundColor: '#FFC107'
})

const AppTitle = glamorous.text({
  width: '100%',
  fontFamily: 'sketch',
  fontSize: 154,
  color: '#212121',
  textAlign: 'center'
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
        <glamorous.View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginHorizontal: 50
          }}
        >
          <AppTitle>Alphabet</AppTitle>

          {LETTERS.map((letter, i) => (
            <LetterButton key={i} letter={letter} onPress={this._onLetterSelection(letter)} />
          ))}
        </glamorous.View>
        {<Modal isVisible={isVisible} onRequestClose={this._closeModal} currentLetter={currentLetter} />}
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
