import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import HomeBottomTabs from '../Navigator/HomeBottomTabs';
import StackAuth from './StackAuth';
import FlashMessage from "react-native-flash-message";
import i18n from '../../utils/i18n';
import localesResource from '../assets/locales/index'
import Intro from '../Screen/Intro';

import codePush from "react-native-code-push";

const Stack = createStackNavigator();

const RootContainerScreen = () => {
  const getLanguage = useSelector(state => state.setting.language);
  const [loadingState, setLoadingState] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);


  const _handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active") {
      codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
      });
    }
  };



  useEffect(() => {

    i18n.init({
      fallbackLng: 'en',
      lng: getLanguage,
      ns: ['translations'],
      defaultNS: 'translations',
      resources: localesResource,
      debug: true,
      // react: {
      //   wait: true,
      // },
      react: { useSuspense: true }
    });

    i18n.on('languageChanged', lng => {
      const currentLanguage = getLanguage;
      if (currentLanguage !== lng) {
        dispatch({
          type: 'setting/changeTheme',
          payload: lng,
        });
      }
    });
    setTimeout(() => setLoadingState(false), 2000)
  }, []);



  if (loadingState) {
    return <View style={styles.splashView}>
      <LottieView
        source={require('./bus.json')}
        autoPlay
        loop
      />
    </View>
  }
  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName={'Home'} screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen
            initialRouteName="Login"
            name="Login"
            component={StackAuth}
          />
          <Stack.Screen name="Intro" children={Intro} />
          <Stack.Screen name="Home" children={HomeBottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>


      <FlashMessage />
    </View>
  );
};
export default RootContainerScreen;
