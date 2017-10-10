// @flow

import React from 'react'
import { Modal, TouchableOpacity, Text } from 'react-native'

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
      <TouchableOpacity key={0} onPress={this._toggleModal}>
        <Text>Press</Text>
      </TouchableOpacity>,
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
