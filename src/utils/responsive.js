// @flow

import { Dimensions } from 'react-native'

type Options = {
  small: any,
  default: any,
  large: any
}

export const responsive = (options: Options) => {
  const { width } = Dimensions.get('screen')

  if (width <= 800) {
    return options.small
  } else if (width >= 1400) {
    return options.large
  } else {
    return options.default
  }
}
