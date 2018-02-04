import { AppRegistry } from 'react-native';
import App from './App';
import store from "./store/store.js";

// if no foreground service, this only runs when app has the focus
setInterval(function() {
    console.log('*** index.android.js setInterval', new Date());
    //store.dispatch({ type: 'TIMESTAMP' });
  }, 10000);

AppRegistry.registerComponent('ForegroundTest', () => App);
