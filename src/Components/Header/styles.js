import { StyleSheet } from 'react-native';
import { deviceWidth, padding } from '../../const';

import ApplicationStyle from '../../Themes/Application.Style';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,

  viewWrapSearch: {
    height: 50,
    justifyContent: 'center',
    width: deviceWidth - 60 - 16,
  },
  textInput: {
    backgroundColor: '#f0f2f5',
    paddingHorizontal: padding.small + 4,
    height: 32,
    borderRadius: 6
  }
});

