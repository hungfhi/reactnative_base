import React from 'react';
import { StatusBar, TouchableOpacity, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash'
import styles from './styles';
import colors from '../../Themes/Colors';
import { barStyle, padding } from '../../const';
import Text from '../Text'
import TextInput from '../TextInput'
import images from '../../assets/images';

const Header = props => {
  const navigation = useNavigation();

  const backRoute = React.useCallback(
    _.debounce(() => navigation.goBack(), 200),
    [],
  )

  const getOnSearch = React.useCallback(
    _.debounce((text) => props.onSearch(text), 200),
    [],
  )

  const renderHeader = props => {
    switch (props.type) {
      case 'back':
        return renderBack(props);
      case 'menu':
        return renderMenu(props);
      case 'noti':
        return renderNoti(props);
      case 'none':
        return renderNone(props);
      case 'search':
        return renderSearch(props);
      case 'close':
        return renderClose(props)
      default:
        return renderDefaultHeader(props);
    }
  };


  const renderDefaultHeader = (props) => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.lightContent}
        />
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={{ ...styles.titleToolbar, color: props.textColor }}>{props.title}</Text>
        </View>
      </View>
    );
  };

  const renderNoti = (props) => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.lightContent}

        />
        <View style={styles.viewWrapTitleNoti}>
          {
            props.detail ? (
              <TouchableOpacity
                onPress={() => {
                  !props.customBack && backRoute();
                  props.customBack && props.onCustomBack()
                }}>
                <IconIonicons
                  name={'chevron-back'}
                  size={28}
                  color={props.textColor}
                />
              </TouchableOpacity>
            ) : <View style={{ width: 25 }} />
          }
          <Text style={{ ...styles.titleToolbar, color: props.textColor }}>{props.title}</Text>
          <TouchableOpacity
            style={{ paddingLeft: 10, paddingVertical: 10 }}
            onPress={() => {
              props?.onDelete() && props?.onDelete()
            }}
          >
            <Image source={images.icon_delete_noti} resizeMode='contain' style={{ width: 18, height: 18 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderNone = (props) => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.lightContent}
        />
        <View style={{ paddingHorizontal: padding.normal }}>
          <Image source={images.logoHV} resizeMode='contain' style={{ width: 110 }} />
        </View>
      </View>
    );
  };


  const renderMenu = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={navigation.openDrawer}>
          <MaterialCommunityIcons
            name={'menu'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>{props.title}</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const renderBack = () => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={() => {
            !props.customBack && backRoute();
            props.customBack && props.onCustomBack()
          }}>
          <IconIonicons
            name={'chevron-back'}
            size={22}
            color={props.textColor}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={{ ...styles.titleToolbar, color: props.textColor }}>{props.title}</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const renderClose = () => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={() => {
            props.customBack && props.onCustomBack()
          }}>
          <IconIonicons
            name={'ios-close-outline'}
            size={24}
            color={props.textColor}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={{ ...styles.titleToolbar, color: props.textColor }}>{props.title}</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={{ ...styles.toolbar, ...props.style, }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={{
            width: 60, height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            !props.customBack && backRoute();
            props.customBack && props.onCustomBack()
          }}>
          <IconIonicons
            name={'chevron-back'}
            size={28}
            color={props.textColor}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapSearch}>

          <TextInput
            autoFocus
            keyboardType="default"
            underlineColorAndroid="transparent"
            placeholder="Nhập mã khuyến mại"
            clearButtonMode="while-editing"
            style={{ ...styles.textInput, color: '#050505' }}
            onChangeText={text => getOnSearch(text)}
          />

        </View>
      </View>
    );
  };

  return renderHeader(props);
};
export default Header;
