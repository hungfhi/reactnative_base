
import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Appearance, Dimensions, Image } from 'react-native'
import { useTheme, useNavigation } from '@react-navigation/native'
import AppIntroSlider from 'react-native-app-intro-slider'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import styles from './styles'
import colors from '../../Themes/Colors'
import images from '../../assets/images'
import { barStyle, padding } from '../../const';

const window = Dimensions.get("window");

export default function Intro() {
  const navigation = useNavigation()

  const _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, paddingTop: window.height / 8 }}>
        <Image source={item.image} style={{ width: '100%', height: 200 }} resizeMode='contain' />
        <Text style={{ textAlign: 'center', marginTop: 50, paddingHorizontal: 12 }}>{item.title}</Text>
        <Text style={{ textAlign: 'center', marginTop: 16, paddingHorizontal: 12 }}>{item.text}</Text>
      </View>
    )
  }

  const _renderNextButton = () => {
    return (
      <View style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.buttonCircle}>
          <Icon name="chevron-right" size={32} color={colors.black} />
        </View>
      </View>
    );
  }

  const _renderPrevButton = () => {
    return (
      <View style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.buttonCircle}>
          <Icon name="chevron-left" size={32} color={colors.black} />
        </View>
      </View>
    );
  }

  const _renderDoneButton = () => {
    return (
      <View style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.buttonCircle}>
          <Octicons name="check" size={22} color={colors.black} />
        </View>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return <View style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ ...styles.textNormal, color: colors.colorText }}>Bỏ qua</Text>
    </View>
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar

        backgroundColor={colors.white}
        animated
        barStyle={barStyle.darkContent}
      />
      <View style={{ flex: 1, backgroundColor: colors.yellow }}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          dotStyle={{ backgroundColor: 'rgba(0, 0, 0, .0)', borderColor: colors.black, borderWidth: 1 }}
          activeDotStyle={{ backgroundColor: colors.black }}
          onDone={() => {
            navigation.replace('Home')
          }}
          onSkip={() => {
            navigation.replace('Home')
          }}
          renderDoneButton={_renderDoneButton}
          renderNextButton={_renderNextButton}
          renderPrevButton={_renderPrevButton}
          renderSkipButton={_renderSkipButton}
          showSkipButton={true}
          showPrevButton={true} />
      </View>
    </View>
  )
}

const slides = [
  {
    key: 'intro_1',
    title: 'Một ứng dụng duy nhất',
    text: 'Phục vụ tất cả các nhu cầu di chuyển của bạn',
    image: images.intro1
  },
  {
    key: 'intro_2',
    title: 'Đặt xe nhanh chóng, mọi lúc mọi nơi',
    text: 'Chọn chỗ, xác nhận đặt vé chỉ trong vòng 30 giây dù bạn ở bất kỳ đâu',
    image: images.intro2,
  },
  {
    key: 'intro_3',
    title: 'Đặt xe sân bay',
    text: 'Dịch vụ Limousine 9 chỗ cao cấp, đón - trả trực tiếp tại sảnh sân bay',
    image: images.intro3,
  },
  {
    key: 'intro_4',
    title: 'Đặt xe liên tỉnh',
    text: 'Dịch vụ xe giường nằm chất lượng cao tuyến: Hà Nội - Lào Cai - Sapa, Hà Nội - Điện Biên - Bản Phủ - Mường Lay, Hà Nội - Sơn La, Hà Nội - Hà Giang...',
    image: images.intro4,
  },
  {
    key: 'intro_5',
    title: 'Giá vé ưu đãi và minh bạch',
    text: 'Giá vé được công khai chi tiết, rõ ràng với nhiều chương trình khuyến mãi hấp dẫn',
    image: images.intro5,
  },
]