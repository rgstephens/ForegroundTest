package com.foregroundtest;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;
import android.util.Log;
import com.facebook.react.bridge.Promise;
import android.content.Intent;
import android.app.PendingIntent;
import android.graphics.BitmapFactory;

import com.foregroundtest.ForegroundService;

public class FGServiceBridgeModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "FGServiceBridge";
    private static ReactApplicationContext reactContext = null;

    public FGServiceBridgeModule(ReactApplicationContext context) {
        // Pass in the context to the constructor and save it so you can emit events
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        super(context);

        reactContext = context;
    }

    @Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        return REACT_CLASS;
    }

    @Override
    public Map<String, Object> getConstants() {
        // Export any constants to be used in your native module
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        final Map<String, Object> constants = new HashMap<>();
        constants.put("EXAMPLE_CONSTANT", "example");

        return constants;
    }

    @ReactMethod
    public void exampleMethod() {
        // An example native method that you will expose to React
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
    }

    @ReactMethod 
    public void startService(Promise promise) {
        Log.d(REACT_CLASS, "startService");
        try {
            Intent intent = new Intent(ForegroundService.FOREGROUND);
            intent.setClass(this.getReactApplicationContext(), ForegroundService.class);
            //startService(intent);
            getReactApplicationContext().startService(intent);
            Log.d(REACT_CLASS, "startService, success");
            promise.resolve(true);
            //Intent intent = new Intent(GeoLocationService.FOREGROUND);
            //intent.setClass(this.getReactApplicationContext(), GeoLocationService.class);
            //getReactApplicationContext().startService(intent);
        } catch (Exception e) {
            Log.d(REACT_CLASS, "startService failed!");
            promise.reject(e);
            return;
        }
    }

    @ReactMethod
    public void stopService(Promise promise) {
        Log.d(REACT_CLASS, "stopService");
        try {
            Intent intent = new Intent(ForegroundService.FOREGROUND);
            intent.setClass(this.getReactApplicationContext(), ForegroundService.class);
            this.getReactApplicationContext().stopService(intent);
            //Intent intent = new Intent(GeoLocationService.FOREGROUND);
            //intent.setClass(this.getReactApplicationContext(), GeoLocationService.class);
            //this.getReactApplicationContext().stopService(intent);
        } catch (Exception e) {
            Log.d(REACT_CLASS, "stopService failed!");
            promise.reject(e);
            return;
        }
        promise.resolve(true);
    }

    private static void emitDeviceEvent(String eventName, @Nullable WritableMap eventData) {
        // A method for emitting from the native side to JS
        // https://facebook.github.io/react-native/docs/native-modules-android.html#sending-events-to-javascript
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, eventData);
    }
}
