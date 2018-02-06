package com.foregroundtest.fgservicebridge;

import com.foregroundtest.R;
import com.foregroundtest.MainActivity;

import android.app.Service;
import android.app.Notification;
import android.app.NotificationManager;
import android.annotation.TargetApi;
import android.util.Log;
import android.os.IBinder;
import android.os.Build;
import android.content.Intent;
import android.app.PendingIntent;
import android.support.annotation.Nullable;
import android.support.v4.app.NotificationCompat;
import android.graphics.BitmapFactory;

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

  private Notification getCompatNotification() {
    Log.d(REACT_CLASS, "getCompatNotification");
    NotificationCompat.Builder builder = new NotificationCompat.Builder(this);
    String str = "Scanning for beacons in the background";
    builder
      .setSmallIcon(R.mipmap.ic_notification)
      .setLargeIcon(BitmapFactory.decodeResource(getResources(), R.mipmap.ic_launcher))
      .setContentTitle(APP_NAME)
      .setContentText(str)
      .setTicker(str)
      .setWhen(System.currentTimeMillis());
    Intent startIntent = new Intent(getApplicationContext(), MainActivity.class);
    PendingIntent contentIntent = PendingIntent.getActivity(this, 1000, startIntent, 0);
    builder.setContentIntent(contentIntent);
    return builder.build();
  }
}
