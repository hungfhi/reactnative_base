import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import HomeScreen from '../Screen/Home';
import Exchange from '../Screen/Exchange';
import MenuScreen from '../Screen/Menu';
import BuyCoin from '../Screen/BuyCoin';
import ProfileScreen from '../Screen/Profile';
import styles from './styles';
import images from '../assets/images'
import Text from '../Components/Text'
import colors from '../Themes/Colors';
import { deviceWidth } from '../const';


const Tab = createBottomTabNavigator();

function CustomBottomTab({ state, descriptors, navigation }) {
  const dispatch = useDispatch()
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const user = useSelector(state => state.profile?.user)
  const isFocused = state.index;
  const countNotify = useSelector(state => state?.home?.countNotify)
  const setting = useSelector(state => state.setting)
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  };



  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const onPress = (index, route) => {
    // if (index === 2 && !user) {
    //   return navigation.navigate('Login')
    // }
    // if (index === 1 && !user) {
    //   return navigation.navigate('Login')
    // }
    if (isFocused !== index) {
      ReactNativeHapticFeedback.trigger("impactLight", options);
      navigation.navigate(route);
    }
  };

  const renderImageNoti = (isFocused, countNotify) => {
    // case isFocused == 2 ? images.iconTabNotificationActive : images.iconNotiNumber
    switch (isFocused) {
      case 3:
        return countNotify > 0 ? images.iconNotiNumberActive : images.iconTabNotificationActive
      default:
        return countNotify > 0 ? images.iconNotiNumber : images.iconTabNotification

    }
  }


  return (

    <View
      style={{
        flexDirection: 'row',
        height: 76,
        borderTopWidth: 1,
        borderColor: setting.theme.borderColor,
        backgroundColor: '#fff'
      }}>
      <TouchableOpacity
        style={{ ...styles.itemTab, paddingBottom: isIphoneX ? 16 : 10 }}
        activeOpacity={0.6}
        onPress={() => onPress(0, 'MenuScreen')}>
        <Image source={isFocused == 0 ? images.iconTabHomeActive : images.iconTabHome} style={styles.icon} />
        <Text style={{ ...styles.textSmall, fontSize: 10, paddingTop: 2, fontFamily: 'Nunito-Bold', color: isFocused == 0 ? colors.yellow : setting.theme.textColor2 }}>More</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.itemTab, paddingBottom: isIphoneX ? 16 : 10 }}
        activeOpacity={0.6}
        onPress={() => onPress(1, 'BuyCoin')}>
        <Image source={isFocused == 1 ? images.iconTabTicketActive : images.iconTabTicket} style={styles.icon} />
        <Text style={{ ...styles.textSmall, fontSize: 10, paddingTop: 2, fontFamily: 'Nunito-Bold', color: isFocused == 1 ? colors.yellow : setting.theme.textColor2 }}>Buy Coin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.itemTab, paddingBottom: isIphoneX ? 16 : 10 }}
        activeOpacity={0.6}
        onPress={() => onPress(2, 'HomeScreen')}>
        <Image source={isFocused == 2 ? images.iconTabHomeActive : images.iconTabHome} style={styles.icon} />
        <Text style={{ ...styles.textSmall, fontSize: 10, paddingTop: 2, fontFamily: 'Nunito-Bold', color: isFocused == 2 ? colors.yellow : setting.theme.textColor2 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.itemTab, paddingBottom: isIphoneX ? 16 : 10 }}
        activeOpacity={0.6}
        onPress={() => onPress(3, 'Exchange')}>
        <Image source={isFocused == 3 ? images.iconTabTicketActive : images.iconTabTicket} style={styles.icon} />
        <Text style={{ ...styles.textSmall, fontSize: 10, paddingTop: 2, fontFamily: 'Nunito-Bold', color: isFocused == 3 ? colors.yellow : setting.theme.textColor2 }}>Exchange</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.itemTab, paddingBottom: isIphoneX ? 16 : 10 }}
        activeOpacity={0.6}
        onPress={() => onPress(4, 'ProfileScreen')}>
        <Image source={isFocused == 4 ? images.iconTabUserActive : images.iconTabUser} style={styles.icon} />
        <Text style={{ ...styles.textSmall, fontSize: 10, paddingTop: 2, fontFamily: 'Nunito-Bold', color: isFocused == 4 ? colors.yellow : setting.theme.textColor2 }}>Me</Text>
      </TouchableOpacity>
    </View>

  );
}

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      tabBar={props => <CustomBottomTab {...props} />}
      lazy
    >
      <Tab.Screen name="MenuScreen" component={MenuScreen} />
      <Tab.Screen name="BuyCoin" component={BuyCoin} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Exchange" component={Exchange} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default HomeBottomTabs;

export function isIphoneX() {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim) || isIPhone12SeriesSize(dim))
  );
}

export function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}

export function isIPhone12SeriesSize(dim) {
  return dim.height >= 844 || dim.width >= 844;
}

