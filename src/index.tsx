import { NativeModules, PermissionsAndroid, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-send-direct-sms' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const SendSms = NativeModules.SendDirectSms
  ? NativeModules.SendDirectSms
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );


const SendDirectSms = async (mobileNumber: string, bodySMS: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    if (mobileNumber) {
      try {
        // @ts-ignore
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.SEND_SMS);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          SendSms.sendDirectSms(mobileNumber, bodySMS);
          resolve('SMS sent'); // Resolve the promise if SMS sent successfully
        } else {
          reject('SMS permission denied'); // Reject the promise if permission is denied
        }
      } catch (error) {
        reject(error); // Reject the promise if an error occurs
      }
    } else {
      reject('Invalid mobile number'); // Reject the promise for an invalid mobile number
    }
  });
};

export {SendDirectSms};
