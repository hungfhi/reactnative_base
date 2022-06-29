import React, { useEffect, useState, useRef } from 'react'
import { TouchableOpacity, View, StatusBar, Dimensions, ActivityIndicator, AppState, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { Container, Content } from 'native-base'
import Header from '../../Components/Header'
import Button from '../../Components/Button'
const dimensions = Dimensions.get('window')
const imageHeight = dimensions.height


const Home = () => {
    const navigation = useNavigation()
    const [t, i18n] = useTranslation()




    return (
        <Container>
            <Header
                title={'Home'}
                type={'none'}
            />
            <Content>

            </Content>
        </Container>
    )
}

const styles = {}

export default Home