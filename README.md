# Getting Started with React-Native

This project was bootstrapped with [react-native](https://reactnative.dev) and 
[nativebase](https://nativebase.io/)   

## Install in React Native Project
Create a new project if not exist  

:computer: `npx react-native init DrawerNavigator`  

:computer: `cd DrawerNavigator`  

:computer: `npm install native-base react-native-svg react-native-safe-area-context`

:iphone: iOS run pod install  
`cd ios`  
`pod install`

## Install Drawer Navigator
[react-navigation](https://reactnavigation.org)  
`npm install @react-navigation/drawer`  

EXPO PROJECT: `expo install react-native-gesture-handler react-native-reanimated`  

:point_right: REACT NATIVE PROJECT: `npm install react-native-gesture-handler react-native-reanimated`

## :zap:Available Scripts:zap:

In the project directory, you can run:

### `npm start`
Developer tools running on [http://localhost:19002](http://localhost:19002)  
Starting Metro Bundler

The page will reload if you make edits.\
You will also see any lint errors in the console.

### :robot: `npm run android`

### :iphone: `npm run ios`


## Debug with real phone :iphone::bug:
`adb devices`  

```console
List of devices attached  
9c2997db	device
```

### Start Metro
 `npx react-native start`

### Start app
`npx react-native run-android`  

`npx react-native run-ios`


## :hammer_and_wrench: FIXME :hammer_and_wrench: React Native - error attachToServer is not a function

`npm i @react-native-community/cli --save-dev`

## :keyboard: Creating a native stack navigator :keyboard:
```javascript
// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
```