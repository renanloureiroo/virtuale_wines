import { WrapperType } from './index'
import { View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { device } from '../../shared/utils/device/sizes'

type useBoxComponentProps = {
  safeArea: boolean
}

type useBoxComponentType = {
  Wrapper: WrapperType
  statusBarHeight: number
  bottomSpaceHeight: number
}

export const useBoxComponent = ({
  safeArea
}: useBoxComponentProps): useBoxComponentType => {
  const Wrapper: WrapperType = safeArea ? SafeAreaView : View

  const statusBarHeight = device.getStatusBarHeight()
  const bottomSpaceHeight = device.getBottomSpace()

  return {
    Wrapper,
    statusBarHeight,
    bottomSpaceHeight
  }
}
