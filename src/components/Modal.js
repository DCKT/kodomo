// @flow

import React from 'react'
import { Modal as ReactNativeModal, Image } from 'react-native'
import glamorous from 'glamorous-native'
import Swiper from 'react-native-swiper'

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
  fontSize: 280,
  textAlign: 'center',
  color: '#242424'
})

const DescriptionBlock = glamorous.view({
  position: 'absolute',
  right: 50,
  zIndex: 2,
  backgroundColor: '#fff',
  elevation: 3,
  paddingHorizontal: 30,
  borderRadius: 4
})

const Close = glamorous.touchableopacity({
  position: 'absolute',
  width: 50,
  height: 50,
  top: 15,
  right: 15,
  borderColor: '#fff',
  borderWidth: 4,
  borderRadius: 100
})

const CloseText = glamorous.text({
  fontSize: 30,
  fontWeight: '800',
  color: '#fff',
  textAlign: 'center'
})

type Props = {
  isVisible: boolean,
  onRequestClose: Function,
  currentLetter: string
}

export const Modal = ({ isVisible, onRequestClose, currentLetter }: Props) => (
  <ReactNativeModal animationType='slide' transparent={false} visible={isVisible} onRequestClose={onRequestClose}>
    <Swiper>
      {currentLetter &&
        PICTURES[currentLetter].map((data, i) => (
          <Container key={i}>
            <glamorous.View width='100%'>
              {currentLetter ? <Picture source={data.picture} resizeMode='cover' /> : null}
            </glamorous.View>
            <DescriptionBlock>
              <Letter>{currentLetter.toUpperCase()}</Letter>
              {currentLetter ? <Letter style={{ fontSize: 98 }}>{data.title}</Letter> : null}
            </DescriptionBlock>
            <Close onPress={onRequestClose}>
              <CloseText>X</CloseText>
            </Close>
          </Container>
        ))}
    </Swiper>
  </ReactNativeModal>
)
