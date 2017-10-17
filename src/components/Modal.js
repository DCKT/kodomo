/**
 * Utils
 */
import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, Modal as ReactNativeModal } from 'react-native'

import { PICTURES } from '../utils/pictures'

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

export class Modal extends Component {
  animVal = new Animated.Value(0)

  render () {
    const { isVisible, onRequestClose, currentLetter } = this.props
    const itemWidth = currentLetter
      ? FIXED_BAR_WIDTH / PICTURES[currentLetter].length - (PICTURES[currentLetter].length - 1) * BAR_SPACE
      : 0

    return (
      <ReactNativeModal
        animationType='slide'
        transparent={false}
        visible={isVisible}
        onRequestClose={onRequestClose}
        style={{ flex: 1 }}
      >
        <View style={styles.container} flex={1}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.animVal } } }])}
          >
            {currentLetter
              ? PICTURES[currentLetter].map((image, i) => (
                <Image key={`image${i}`} source={image.picture} style={{ width: deviceWidth }} />
              ))
              : null}
          </ScrollView>
          <View style={styles.barContainer}>
            {currentLetter
              ? PICTURES[currentLetter].map((image, i) => {
                const scrollBarVal = this.animVal.interpolate({
                  inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
                  outputRange: [-itemWidth, itemWidth],
                  extrapolate: 'clamp'
                })

                return (
                  <View
                    key={`bar${i}`}
                    style={[
                      styles.track,
                      {
                        width: itemWidth,
                        marginLeft: i === 0 ? 0 : BAR_SPACE
                      }
                    ]}
                  >
                    <Animated.View
                      style={[
                        styles.bar,
                        {
                          width: itemWidth,
                          transform: [{ translateX: scrollBarVal }]
                        }
                      ]}
                    />
                  </View>
                )
              })
              : null}
          </View>
        </View>
      </ReactNativeModal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row'
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0
  }
})

// // @flow

// import React from 'react'
// import { Modal as ReactNativeModal, ScrollView, Animated, Dimensions } from 'react-native'
// import glamorous from 'glamorous-native'

// /**
//  * Styles
//  */
// const Picture = glamorous.image({
//   flex: 1,
//   height: undefined,
//   width: undefined
// })

// const Container = glamorous.view({
//   backgroundColor: '#64B5F6',
//   flex: 1,
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between'
// })

// const Letter = glamorous.text({
//   fontFamily: 'sketch',
//   fontSize: 280,
//   textAlign: 'center',
//   color: '#242424'
// })

// const DescriptionBlock = glamorous.view({
//   position: 'absolute',
//   right: 50,
//   zIndex: 2,
//   backgroundColor: '#fff',
//   elevation: 3,
//   paddingHorizontal: 30,
//   borderRadius: 4
// })

// const Close = glamorous.touchableopacity({
//   position: 'absolute',
//   width: 50,
//   height: 50,
//   top: 15,
//   right: 15,
//   borderColor: '#fff',
//   borderWidth: 4,
//   borderRadius: 100
// })

// const CloseText = glamorous.text({
//   fontSize: 30,
//   fontWeight: '800',
//   color: '#fff',
//   textAlign: 'center'
// })

// type Props = {
//   isVisible: boolean,
//   onRequestClose: Function,
//   currentLetter: string
// }

// const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')
// const animVal = new Animated.Value(0)

// export const Modal = ({ isVisible, onRequestClose, currentLetter }: Props) => {
//   const scrollBarVal = animVal.interpolate({
//     inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
//     outputRange: [-this.itemWidth, this.itemWidth],
//     extrapolate: 'clamp'
//   })

//   return (
//     <ReactNativeModal
//       animationType='slide'
//       transparent={false}
//       visible={isVisible}
//       onRequestClose={onRequestClose}
//       style={{ flex: 1 }}
//     >
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled>
//         <glamorous.View style={{ backgroundColor: 'red' }}>
//           <glamorous.Image
//             source={require('../../assets/images/a/aigle.jpeg')}
//             style={{ width: deviceWidth, height: deviceHeight }}
//             resizeMode='cover'
//           />
//           <glamorous.Image
//             source={require('../../assets/images/a/autruche.jpeg')}
//             style={{ width: deviceWidth, height: deviceHeight }}
//             resizeMode='cover'
//           />
//         </glamorous.View>
//       </ScrollView>
//     </ReactNativeModal>
//   )
// }
