
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
      <Text style={{ ...styles.textNormal, color: colors.colorText }}>B??? qua</Text>
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
    title: 'M???t ???ng d???ng duy nh???t',
    text: 'Ph???c v??? t???t c??? c??c nhu c???u di chuy???n c???a b???n',
    image: images.intro1
  },
  {
    key: 'intro_2',
    title: '?????t xe nhanh ch??ng, m???i l??c m???i n??i',
    text: 'Ch???n ch???, x??c nh???n ?????t v?? ch??? trong v??ng 30 gi??y d?? b???n ??? b???t k??? ????u',
    image: images.intro2,
  },
  {
    key: 'intro_3',
    title: '?????t xe s??n bay',
    text: 'D???ch v??? Limousine 9 ch??? cao c???p, ????n - tr??? tr???c ti???p t???i s???nh s??n bay',
    image: images.intro3,
  },
  {
    key: 'intro_4',
    title: '?????t xe li??n t???nh',
    text: 'D???ch v??? xe gi?????ng n???m ch???t l?????ng cao tuy???n: H?? N???i - L??o Cai - Sapa, H?? N???i - ??i???n Bi??n - B???n Ph??? - M?????ng Lay, H?? N???i - S??n La, H?? N???i - H?? Giang...',
    image: images.intro4,
  },
  {
    key: 'intro_5',
    title: 'Gi?? v?? ??u ????i v?? minh b???ch',
    text: 'Gi?? v?? ???????c c??ng khai chi ti???t, r?? r??ng v???i nhi???u ch????ng tr??nh khuy???n m??i h???p d???n',
    image: images.intro5,
  },
]