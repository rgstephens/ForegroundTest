//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { FGServiceBridge } = NativeModules

export default {
  exampleMethod () {
    return FGServiceBridge.exampleMethod()
  },
  startService () {
    return FGServiceBridge.startService()
  },
  stopService () {
    return FGServiceBridge.stopService()
  }
}
