# react-native-send-direct-sms ![npm version](https://img.shields.io/badge/npm-0.1.1-2)


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
    .then((res) => console.log("then", res))
    .catch((err) => console.log("catch", err))
}

```

## Example

![](https://github.com/Kajanan02/resources/blob/main/images/sendsmsexample.jpg)

```
import * as React from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SendDirectSms } from 'react-native-send-direct-sms';

export default function App() {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [bodySMS, setBodySMS] = React.useState('Hello World');


  function sendSmsData(mobileNumber: string, bodySMS: string) {
    SendDirectSms(mobileNumber, bodySMS)
      .then((res: any) => console.log('then', res))
      .catch((err: any) => console.log('catch', err));
  }

  return (
    <View style={styles.container}>
      {/*<Text>Result: {result}</Text>*/}
      <Text style={styles.titleTextsmall}>
        Enter Recipients Number
      </Text>
      <TextInput
        value={mobileNumber}
        onChangeText={
          (mobileNumber) => setMobileNumber(mobileNumber)
        }
        placeholder={'Enter Mobile Number'}
        keyboardType='numeric'
        style={styles.textInput}
      />
      <Text style={styles.titleTextsmall}>
        Enter SMS Body
      </Text>
      <TextInput
        value={bodySMS}
        onChangeText={(bodySMS) => setBodySMS(bodySMS)}
        placeholder={'Enter SMS body'}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.sendButton} onPress={() => sendSmsData(mobileNumber, bodySMS)}>
        <Text style={styles.sendButtonLabel}>Send SMS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  sendButtonLabel: {
    fontSize: 16,
    color: '#FFFFFF',

  },
  sendButton: {
    width: '100%',
    backgroundColor: '#22C674',
    borderRadius: 4,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 30,
  },
  titleTextsmall: {
    marginBottom: 8,
    marginTop: 16,
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  textInput: {
    paddingLeft: 16,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#3F44511F',
    borderRadius: 4,
    height: 44,
    color: '#000000',
    opacity: 0.75,
    width: '100%',
  },
});


```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

Or open up [an issue](https://github.com/Kajanan02/react-native-send-direct-sms/issues).

---
## Discussion and Collaboration

In addition to the [Github Issues](https://github.com/Kajanan02/react-native-send-direct-sms/issues) page.

---
## License

MIT


