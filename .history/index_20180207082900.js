import { AppRegistry } from 'react-native';
import App from './App';
import store from "./store/store.js";
import { doScan } from "./bluetoothScan";

const scanInterval = 10000;  // Interval between scans in ms
const scanLength = 2000;     // How long to scan in ms

// if no foreground service, this only runs when app has the focus
setInterval(function() {
    console.log('>>> startScan', new Date());
    store.dispatch({ type: 'TIMESTAMP' });
    doScan(scanLength);
  }, scanInterval);

AppRegistry.registerComponent('ForegroundTest', () => App);
