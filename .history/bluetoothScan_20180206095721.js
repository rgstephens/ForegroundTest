import { BleManager } from 'react-native-ble-plx';
import store from './store/store.js';

var base64 = require('base64-js');
var advlib = require('advlib');
var Buffer = require('buffer/').Buffer;

let bleManager = null;

export function doScan(scanTime) {
  if (!bleManager) {
    console.log('first scanning call, instantiate new BleManager');
    bleManager = new BleManager({
      restoreStateIdentifier: 'foregroundTest',
      restoreStateFunction: (bleRestoredState) => {
        console.log('restoreStateFunction called');
      },
    });
  }

  // Set timer to stop scan
  setTimeout(function() {
    //const ms = new Date() - startTime;
    //console.log('*** stopping scan, elapsed', new Date(ms).toISOString().slice(11, -1));
    if (bleManager) {
      bleManager.stopDeviceScan();
    }
    //processArray();
    //beacons = [];
  }, scanTime);

  // Start scan
  bleManager.startDeviceScan(null, null, (error, device) => {
    if (error) {
      // Handle error (scanning will be stopped automatically)
      console.log('bleScan error, stopping - ', error);
      return;
    }
    //parseManufacturerData(device);
    console.log('device:', device);
  });
}

function parseManufacturerData(device) {
    // mfg ids: https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers
    const ba = base64.toByteArray(device.manufacturerData);
    const valueHex = Array.from(ba, function(byte) {
      return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
    const mfgLen = zeroPad(valueHex.length / 2 + 2, 2);
    let mfgData = advlib.ble.data.process(mfgLen + 'ff' + valueHex, 0, {});
    switch (mfgData.manufacturerSpecificData.companyIdentifierCode) {
      case '004c': //  Apple
        //console.log('Apple:', mfgData.manufacturerSpecificData);
        //console.log('iBeacon:', mfgData.manufacturerSpecificData.iBeacon);
        if (mfgData.manufacturerSpecificData.iBeacon) {
          if (mfgData.manufacturerSpecificData.iBeacon.licenseeName) {
            //console.log('iBeacon licensee:', mfgData.manufacturerSpecificData.iBeacon.licenseeName, mfgData.manufacturerSpecificData, device);
          }
          if (mfgData.manufacturerSpecificData.iBeacon.uuid === "876f35dcd1f6461c8102c42f484f9ba6") {
            console.log("*** Found Brian's UUID!", device.id, mfgData.manufacturerSpecificData);
            const txPower = mfgData.manufacturerSpecificData.iBeacon.txPower ? mfgData.manufacturerSpecificData.iBeacon.txPower : null;
            let beacon = {
              address: device.id,
              name: device.name ? device.name : device.localName,
              timestamp: new Date(),
              rssi: device.rssi,
              txPower: txPower ? -parseInt(txPower.substr(0, txPower.length - 3)) : null,
            };
            beacons.push(beacon);
          }
        }
        break;
      default:
        //console.log('MfgData, company: ', mfgData.manufacturerSpecificData.companyName, mfgData);
        break;
    }
  }
  
function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
  }
  