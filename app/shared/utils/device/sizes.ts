import * as iphoneHelper from 'react-native-iphone-x-helper'

interface IDeviceSizes {
  getStatusBarHeight: () => number
  getBottomSpace: () => number
}

export const sizes: IDeviceSizes = {
  getStatusBarHeight: () => iphoneHelper.getStatusBarHeight(),
  getBottomSpace: () => iphoneHelper.getBottomSpace()
}
