// @flow

import React from 'react'
import glamorous from 'glamorous-native'

/**
 * Styles
 */
const Button = glamorous.touchableOpacity({
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 10,
  marginRight: 10,
  marginBottom: 10
})

const ButtonContent = glamorous.view({
  flex: 1,
  alignContent: 'center',
  justifyContent: 'center'
})

const ButtonText = glamorous.text({
  color: '#111',
  textAlign: 'center',
  fontSize: 20,
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
