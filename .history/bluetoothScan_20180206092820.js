import { BleManager } from "react-native-ble-plx";

let bleManager = null;

export function doScan() {
  if (!bleManager) {
    console.log("first scanning call, instantiate new BleManager");
    bleManager = new BleManager({
      restoreStateIdentifier: "eddygrid",
      restoreStateFunction: bleRestoredState => {
        console.log("restoreStateFunction called");
      }
    });
  }
  doScan();
}
