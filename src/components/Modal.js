// @flow

import React from 'react'
import { Modal as ReactNativeModal, Image } from 'react-native'
import glamorous from 'glamorous-native'

/**
 * Utils
 */
import { PICTURES } from '../utils/pictures'

/**
 * Styles
 */
const Picture = glamorous.image({
  flex: 1,
  height: undefined,
  width: undefined
})

const Container = glamorous.view({
  backgroundColor: '#64B5F6',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const Letter = glamorous.text({
  fontFamily: 'sketch',
  fontSize: 150,
  textAlign: 'center',
  color: '#242424'
})

const Close = glamorous.touchableopacity({
  position: 'absolute',
  width: 50,
  height: 50,
  top: 5,
  right: 5,
  borderColor: '#242424',
  borderWidth: 2,
  borderRadius: 100
})

const CloseText = glamorous.text({
  fontSize: 30,
  fontWeight: '400',
  color: '#242424',
  textAlign: 'center',
  paddingTop: 2
})

type Props = {
  isVisible: boolean,
  onRequestClose: Function,
  currentLetter: string
}

export const Modal = ({ isVisible, onRequestClose, currentLetter }: Props) => (
  <ReactNativeModal animationType='slide' transparent={false} visible={isVisible} onRequestClose={onRequestClose}>
    <Container>
      <glamorous.View width='65%'>
        <Picture source={PICTURES[currentLetter]} resizeMode='cover' />
      </glamorous.View>
      <glamorous.View width='35%'>
        <Letter>{currentLetter.toUpperCase()}</Letter>
      </glamorous.View>
      <Close onPress={onRequestClose}>
        <CloseText>X</CloseText>
      </Close>
    </Container>
  </ReactNativeModal>
)
