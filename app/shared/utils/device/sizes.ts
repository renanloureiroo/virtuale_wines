import * as iphoneHelper from 'react-native-iphone-x-helper'

interface IDeviceSizes {
  getStatusBarHeight: () => number
  getBottomSpace: () => number
}

class Device implements IDeviceSizes {
  getStatusBarHeight(): number {
    return iphoneHelper.getStatusBarHeight()
  }

  getBottomSpace(): number {
    return iphoneHelper.getBottomSpace()
  }
}

export const device = new Device()
