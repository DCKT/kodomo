// @flow

import React from 'react'
import { Modal, Text } from 'react-native'
import glamorous from 'glamorous-native'

const IconContainer = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
})

const Button = glamorous.touchableopacity({
  backgroundColor: '#fff',
  width: 66,
  height: 66,
  borderRadius: 4
})

type Props = {
  children: React$Element<*>
}

export class AlphabetModal extends React.Component {
  props: Props

  state = {
    isVisible: false
  }

  render () {
    return [
      <IconContainer key={0}>
        <Button onPress={this._toggleModal}>
          <Text>Press</Text>
        </Button>
        <Text>Alphabet</Text>
      </IconContainer>,
      <Modal
        key={1}
        animationType='slide'
        transparent={false}
        visible={this.state.isVisible}
        onRequestClose={this._toggleModal}
      >
        {this.props.children}
      </Modal>
    ]
  }

  _toggleModal = () => this.setState(state => ({ ...state, isVisible: !state.isVisible }))
}
