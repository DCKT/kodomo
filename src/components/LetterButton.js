// @flow

import React from 'react'
import glamorous from 'glamorous-native'

/**
 * Utils
 */
import { responsive } from '../utils/responsive'

/**
 * Styles
 */
const Button = glamorous.touchableOpacity({
  width: responsive({ small: 60, default: 80 }),
  height: responsive({ small: 60, default: 80 }),
  backgroundColor: '#fff',
  borderRadius: 10,
  marginRight: 10,
  marginTop: 10,
  elevation: 2
})

const ButtonContent = glamorous.view({
  flex: 1,
  alignContent: 'center',
  justifyContent: 'center'
})

const ButtonText = glamorous.text({
  color: '#111',
  textAlign: 'center',
  fontSize: responsive({ small: 28, default: 32 }),
  fontWeight: '600'
})

type Props = {
  letter: string,
  onPress: Function
}

export const LetterButton = (props: Props) => (
  <Button onPress={props.onPress}>
    <ButtonContent>
      <ButtonText>{props.letter.toUpperCase()}</ButtonText>
    </ButtonContent>
  </Button>
)
