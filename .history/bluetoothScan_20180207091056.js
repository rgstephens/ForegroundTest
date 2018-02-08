import { BleManager } from 'react-native-ble-plx';
import store from './store/store.js';

var base64 = require('base64-js');
var advlib = require('advlib');
var Buffer = require('buffer/').Buffer;

let bleManager = null;

export function doScan(scanTime) {
  let deviceList = [];
  if (!bleManager) {
    console.log('--- first scanning call, instantiate new BleManager');
    bleManager = new BleManager({
      restoreStateIdentifier: 'foregroundTest',
      restoreStateFunction: (bleRestoredState) => {
        console.log('restoreStateFunction called');
      },
    });
  }

  // Set timer to stop scan
  setTimeout(function() {
    console.log('<<< stopping scan, ', new Date());
    if (bleManager) {
      bleManager.stopDeviceScan();
    }
  }, scanTime);

  // Start scan
  bleManager.startDeviceScan(null, null, (error, device) => {
    if (error) {
      // Handle error (scanning will be stopped automatically)
      console.log('bleScan error, stopping - ', error);
      return;
    }
    if (!deviceList.includes(device.i)) {
      console.log('add device:', device.id, ', deviceList:', deviceList);
      deviceList.push(device.id);  
      store.dispatch({ type: 'DEVICE', device: device });
    }
  });
}
