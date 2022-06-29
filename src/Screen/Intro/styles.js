import { StyleSheet } from 'react-native';
import ApplicationStyle from '../../Themes/Application.Style';
import { fontFamily, fontSize, padding } from '../../const';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
