package com.foregroundtest.foregroundservice;

import android.app.Service;
//import android.app.Notification;
import android.app.NotificationManager;
import android.annotation.TargetApi;
import android.content.Intent; 
import android.util.Log;

public class ForegroundService extends Service {
    public static final String APP_NAME = "ForegroundTest";
    public static final String REACT_CLASS = "ForegroundService";
    private NotificationManager mNotificationManager;

    public static final String FOREGROUND = "com.foregroundtest.fgservicebridge.ForegroundService";
    private static int NOTIFICATION_ID = 3313;
    
  @Override
  @TargetApi(Build.VERSION_CODES.M)
  public void onCreate() {
    Log.d(REACT_CLASS, "onCreate");
    super.onCreate();
  }

  @Override
  public void onDestroy() {
    Log.d(REACT_CLASS, "onDestroy");
    super.onDestroy();
  }

  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    Log.d(REACT_CLASS, "onStartCommand, calling startForeground");
    startForeground(NOTIFICATION_ID, getCompatNotification());
    return START_STICKY;
  }

  @Nullable
  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }
}
