package com.senddirectsms;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.IllegalViewOperationException;
import android.telephony.SmsManager;

@ReactModule(name = SendDirectSmsModule.NAME)
public class SendDirectSmsModule extends ReactContextBaseJavaModule {
  public static final String NAME = "SendDirectSms";

  public SendDirectSmsModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void sendDirectSms(String phoneNumber, String msg) {
    try {
      SmsManager smsManager = SmsManager.getDefault();
      smsManager.sendTextMessage(
        phoneNumber, null, msg, null, null
      );
    } catch (Exception ex) {
      System.out.println("couldn't send message.");
    }
  }
}
