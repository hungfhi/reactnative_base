import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Header from '../../Components/Header';


const Tab = createMaterialTopTabNavigator();

const Exchange = () => {
  const setting = useSelector(state => state.setting)

  return (
    <SafeAreaProvider>
      <Header
        title="Exchange"
        type='none'
      />

    </SafeAreaProvider>
  );
};

export default Exchange;
