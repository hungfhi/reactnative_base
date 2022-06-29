import React, { useEffect, useState, useRef } from 'react'
import { TouchableOpacity, View, StatusBar, Dimensions, ActivityIndicator, AppState, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { Container, Content } from 'native-base'
import Header from '../../Components/Header'
import Button from '../../Components/Button'
const dimensions = Dimensions.get('window')
const imageHeight = dimensions.height


const Menu = () => {
    const navigation = useNavigation()
    const [t, i18n] = useTranslation()

    return (
        <Container>
            <Header
                title={'Menu'}
                type={'none'}
            />
            <Content>
            </Content>
        </Container>
    )
}

const styles = {}

export default Menu