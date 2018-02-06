package com.foregroundtest.foregroundservice;

public class ForegroundService extends Service {
    public static final String APP_NAME = "ForegroundTest";
    public static final String REACT_CLASS = "ForegroundService";
    private NotificationManager mNotificationManager;

    public static final String FOREGROUND = "com.foregroundtest.fgservicebridge.ForegroundService";
    private static int NOTIFICATION_ID = 3405;
    
  @Override
  @TargetApi(Build.VERSION_CODES.M)
  public void onCreate() {
    Log.d(REACT_CLASS, "onCreate");
    super.onCreate();
  }
}
