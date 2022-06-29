import React, { memo, useEffect, useState } from 'react';
import {
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content } from 'native-base'
import Header from '../../Components/Header';
import styles from './styles';

import colors from '../../Themes/Colors';

const ProfileScreen = memo(() => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const setting = useSelector(state => state.setting);


    return (
        <Container
            style={{ ...styles.mainContainer, backgroundColor: setting.theme.bg1 }}>
            <Header
                type="none"
                title={'Notification'}
            />
            <Content>

            </Content>

        </Container>
    );
});
export default ProfileScreen;
