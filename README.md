# react-native-send-direct-sms ![npm version](https://img.shields.io/badge/npm-0.1.0-2)


React Native Send SMS is a JavaScript library for React Native applications that provides a convenient way to send SMS messages programmatically. It enables developers to integrate SMS functionality into their mobile apps, allowing them to send text messages to specified recipients directly from the app. This can be useful for implementing features like SMS-based authentication, notifications, or any other communication that requires sending SMS messages.

## Installation

```sh
npm install react-native-send-direct-sms
```

## Android Setup

It's very important ask for permission in your AndroidManifest.xml file if you need to use Send Message directly.


Please add this line to your AndroidManifest.xml before using this example:
- In `android/app/src/main/AndroidManifest.xml` add the following lines:

```xml
<uses-permission android:name="android.permission.SEND_SMS"/>
```

## Usage

```js
import { SendDirectSms } from 'react-native-send-direct-sms';
// ...

function sendSmsData(mobileNumber, bodySMS) {
  SendDirectSms(mobileNumber, bodySMS)
    .then((res: any) => console.log("then", res))
    .catch((err: any) => console.log("catch", err))
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
