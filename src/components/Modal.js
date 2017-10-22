/**
 * Utils
 */
import React from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, Modal as ReactNativeModal } from 'react-native'
import glamorous from 'glamorous-native'

/**
 * utils
 */
import { PICTURES } from '../utils/pictures'
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

/**
 * Styles
 */
const Container = glamorous.view({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
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
  top: 200,
  zIndex: 2,
  backgroundColor: '#fff',
  elevation: 3,
  paddingHorizontal: 30,
  borderRadius: 4
})

const BarContainer = glamorous.view({
  position: 'absolute',
  zIndex: 2,
  top: 20,
  flexDirection: 'row'
})

const Track = glamorous.view({
  backgroundColor: '#ccc',
  overflow: 'hidden',
  height: 40,
  borderRadius: 100
})

export class Modal extends React.Component {
  props: {
    isVisible: boolean,
    currentLetter: ?string,
    onRequestClose: Function
  }

  animVal = new Animated.Value(0)

  componentWillReceiveProps () {
    this.animVal = new Animated.Value(0)
  }

  render () {
    const { isVisible, onRequestClose, currentLetter } = this.props

    return (
      <ReactNativeModal
        animationType='slide'
        transparent={false}
        visible={isVisible}
        onRequestClose={onRequestClose}
        style={{ flex: 1 }}
      >
        <Container>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.animVal } } }])}
          >
            {currentLetter
              ? PICTURES[currentLetter].map((image, i) => (
                <glamorous.View key={i}>
                  <Image source={image.picture} style={{ width: deviceWidth, height: deviceHeight }} />
                  <DescriptionBlock>
                    <Letter>{currentLetter.toUpperCase()}</Letter>
                    <Letter style={{ fontSize: image.title.length >= 5 ? 80 : 100 }}>{image.title}</Letter>
                  </DescriptionBlock>
                </glamorous.View>
              ))
              : null}
          </ScrollView>
          <BarContainer>
            {currentLetter
              ? PICTURES[currentLetter].map((image, i) => {
                const scrollBarVal = this.animVal.interpolate({
                  inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
                  outputRange: [-40, 40],
                  extrapolate: 'clamp'
                })

                return (
                  <Track
                    key={i}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                      marginLeft: i === 0 ? 0 : 10
                    }}
                  >
                    <Animated.View
                      style={[
                        {
                          backgroundColor: '#2196F3',
                          height: 40,
                          borderRadius: 100,
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: 40,
                          transform: [{ translateX: scrollBarVal }]
                        }
                      ]}
                    />
                  </Track>
                )
              })
              : null}
          </BarContainer>
        </Container>
      </ReactNativeModal>
    )
  }
}
